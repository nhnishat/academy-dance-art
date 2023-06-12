import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClass from '../../../hooks/useClass';

const UserAllClasses = () => {
	const [enrollClass, refetch] = useClass();
	console.log(enrollClass);
	const handleDeleteOne = (item) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/class/${item._id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
					});
			}
		});
	};

	// const handlePayment = (id) => {
	// 	console.log('this is is', id, enrollClass);
	// };

	return (
		<div>
			<div className="uppercase flex font-semibold justify-evenly p-5 w-full">
				<h2 className="text-3xl">Total Items: {enrollClass.length}</h2>
				{/* <h2 className="text-3xl">Total price: ${sum}</h2> */}
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>ITEM IMAGE</th>
							<th>ITEM NAME</th>
							<th>PRICE</th>
							<th>ACTION</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{enrollClass.map((item, index) => (
							<tr key={item._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={item.image}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
									</div>
								</td>
								<td>
									<div className="font-bold">{item.name}</div>
								</td>
								<th>
									<button className="btn btn-ghost btn-xs text-end">
										${item.price}
									</button>
								</th>
								<th>
									<Link to={`/dashboard/payment/${item._id}`}>
										<button
											className="btn btn-neutral text-white"
											// onClick={() => handlePayment(item)}
										>
											Payment Now
										</button>
									</Link>
								</th>
								<th>
									<button
										onClick={() => handleDeleteOne(item)}
										className="btn btn-ghost btn-md bg-red-600 text-white"
									>
										<FaTrashAlt />
									</button>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserAllClasses;
