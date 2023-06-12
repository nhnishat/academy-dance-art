import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useClass from '../../hooks/useClass';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.VITE_PAYMENT_GATEWAYE_PK);
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAYE_PK);
console.log(stripePromise);

const Payment = () => {
	const [enrollClass] = useClass();
	const { id } = useParams();

	const selectedClass = enrollClass.find((item) => item._id === id);
	const price = selectedClass.price;
	console.log(price);

	return (
		<div className="w-full">
			<SectionTitle subHeading="please process" heading="Payment" />
			<h2 className="text-3xl">Payment to...</h2>
			{selectedClass && (
				<Elements stripe={stripePromise}>
					<CheckoutForm item={selectedClass} id={id} price={price} />
				</Elements>
			)}
		</div>
	);
};

export default Payment;
