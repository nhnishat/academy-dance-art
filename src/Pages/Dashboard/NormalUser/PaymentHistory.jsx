import useRequestInstructor from '../../../hooks/useRequestInstructor';

const PaymentHistory = () => {
	const [InstructorRequest] = useRequestInstructor();

	// Sort the payment history in descending order based on transaction date
	const sortedPaymentFind = InstructorRequest.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Transaction Id</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{sortedPaymentFind.map((instructor, index) => (
							<tr key={instructor._id}>
								<th>{index + 1}</th>
								<th>{instructor.transactionId}</th>
								<td>${instructor.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistory;
