import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useRequestInstructor from '../../../hooks/useRequestInstructor';

const EnrollClass = () => {
	const [InstructorRequest, refetch] = useRequestInstructor();

	const handleDeleteOne = (user) => {
		Swal.fire({
			title: 'Are you sure to delete item?',
			text: "You won't be able to change this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, absoultly delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://academy-of-dace-art-server.vercel.app/payments/${user._id}`,
					{
						method: 'DELETE',
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								'deleted must!',
								'Your file has been deleted.',
								'successfull'
							);
						}
					});
			}
		});
	};

	return (
		<div>
			<h2>enroll class</h2>

			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Price</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{InstructorRequest.map((instructor, index) => (
							<tr key={instructor._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div>
											<div className="font-bold">{instructor.name}</div>
										</div>
									</div>
								</td>
								<td>
									<span className="badge badge-ghost badge-sm">
										{instructor.price}
									</span>
								</td>
								<td>
									<span className="badge badge-ghost badge-sm">
										{instructor.email}
									</span>
								</td>

								<button
									onClick={() => handleDeleteOne(instructor)}
									className="btn btn-ghost btn-md bg-red-600 text-white"
								>
									<FaTrashAlt />
								</button>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default EnrollClass;
