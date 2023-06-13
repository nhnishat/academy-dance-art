import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import './Checkout.css';

const CheckoutForm = ({ item, price, id }) => {
	const stripe = useStripe();
	const elements = useElements();
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');

	useEffect(() => {
		if (price > 0) {
			axiosSecure.post('/create-payment-intent', { price }).then((res) => {
				console.log(res.data.clientSecret);
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [price, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log('error', error);
			setCardError(error.message);
			return;
		} else {
			setCardError('');
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: paymentMethod.id,
			});

		if (confirmError) {
			console.log(confirmError);
			setProcessing(false);
			return;
		}

		console.log('payment intent', paymentIntent);
		setProcessing(false);

		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);
			// Save payment information to the server
			const payment = {
				email: user?.email,
				name: user?.displayName,
				transactionId: paymentIntent.id,
				price: price,
				date: new Date(),
				quantity: item.length,
				classId: id,
				status: 'service pending',
				Name: item.instructor,
			};

			axiosSecure.post(`/payments/${id}`, payment).then((res) => {
				console.log(res.data);
				if (res.data.result.insertedId) {
					// Display confirmation message
				}
			});
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white rounded-md shadow-lg p-6 mt-8">
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="card-element" className="label">
						Card Information
					</label>
					<CardElement
						id="card-element"
						options={{
							style: {
								base: {
									fontSize: '16px',
									color: '#424770',
									'::placeholder': {
										color: '#aab7c4',
									},
								},
								invalid: {
									color: '#9e2146',
								},
							},
						}}
					/>
				</div>
				<button
					className="btn btn-primary mt-4"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-600 mt-4">{cardError}</p>}
			{transactionId && (
				<p className="text-green-500 mt-4">
					Transaction complete with transactionId: {transactionId}
				</p>
			)}
		</div>
	);
};

export default CheckoutForm;
