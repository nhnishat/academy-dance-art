import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAdmin from '../../../hooks/useAdmin';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
	const [axiosSecure] = useAxiosSecure();
	const [isAdmin] = useAdmin();
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users');
		console.log(res);
		return res.data;
	});

	const handleRoleChange = (user, roleChange) => {
		if (isAdmin) {
			fetch(`http://localhost:5000/users/${roleChange}/${user._id}`, {
				method: 'PATCH',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.modifiedCount > 0) {
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'Successfully',
							title: `${user.name} is now ${roleChange}`,
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		}
	};

	return (
		<div>
			<h2>All Users {users?.length}</h2>
			<div className="overflow-x-auto">
				<table className="table table-zebra">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							{isAdmin && <th>Change Role</th>}
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
								</td>
								<td>
									{isAdmin && (
										<div className="flex justify-center">
											<button
												onClick={() => handleRoleChange(user, 'admin')}
												className={`${
													user.role === 'admin'
														? 'bg-black text-white'
														: 'bg-gray-300 text-gray-700'
												} mx-1 px-4 py-2 rounded-md`}
												disabled={user.role === 'admin'}
											>
												Admin
											</button>
											<button
												onClick={() => handleRoleChange(user, 'instructor')}
												className={`${
													user.role === 'instructor'
														? 'bg-blue-600 text-white'
														: 'bg-gray-300 text-gray-700'
												} mx-1 px-4 py-2 rounded-md`}
												disabled={user.role === 'instructor'}
											>
												Instructor
											</button>
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUser;
