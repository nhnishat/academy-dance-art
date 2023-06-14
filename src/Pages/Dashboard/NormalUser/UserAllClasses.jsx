import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClass from '../../../hooks/useClass';

const UserAllClasses = () => {
	const [enrollClass, refetch] = useClass();

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
				fetch(
					`https://academy-of-dace-art-server.vercel.app/class/${item._id}`,
					{
						method: 'DELETE',
					}
				)
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

	return (
		<div className="container mx-auto py-8">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-semibold">
					Total Items: {enrollClass.length}
				</h2>
			</div>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>#</th>
							<th>ITEM IMAGE</th>
							<th>ITEM NAME</th>
							<th>PRICE</th>
							<th>ACTION</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{enrollClass.map((item, index) => (
							<tr key={item._id}>
								<td className="w-16">{index + 1}</td>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={item.image}
													alt="Avatar"
													className="w-full h-full"
												/>
											</div>
										</div>
									</div>
								</td>
								<td>
									<div className="font-bold">{item.name}</div>
								</td>
								<td>
									<button className="btn btn-ghost btn-xs text-end">
										${item.price}
									</button>
								</td>
								<td>
									<Link to={`/dashboard/payment/${item._id}`}>
										<button className="btn btn-primary">Payment Now</button>
									</Link>
								</td>
								<td>
									<button
										onClick={() => handleDeleteOne(item)}
										className="btn btn-ghost btn-md bg-red-600 text-white"
									>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserAllClasses;
