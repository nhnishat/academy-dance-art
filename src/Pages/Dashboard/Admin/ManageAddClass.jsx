import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useRequestAdmin from '../../../hooks/useRequestAdmin';

const ManageAddClass = () => {
	const [adminRequest, refetch] = useRequestAdmin();

	const handleAccept = (admin) => {
		fetch(
			`https://academy-of-dace-art-server.vercel.app/classes/${admin._id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(admin),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				refetch();
				if (data.result.insertedId) {
					Swal.fire('SuccessFull!', 'Your file has been Aproved.', 'success');
				}
			});
	};

	const handleDecline = (id) => {
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
					`https://academy-of-dace-art-server.vercel.app/requestadmin/${id}`,
					{
						method: 'DELETE',
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						refetch();
						if (data.data.deletedCount > 0) {
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
					});
			}
		});
	};

	return (
		<div>
			<Helmet>
				<title>Academy of Dance Art || Manage Item</title>
			</Helmet>
			{adminRequest.map((admin) => (
				<div
					key={admin._id}
					className="card lg:card-side bg-base-100 shadow-xl w-full my-10"
				>
					<figure>
						<img
							src={admin.image}
							alt="Album"
							style={{ width: '100%', height: '200px' }}
						/>
					</figure>
					<div className="p-10 space-y-2">
						<h2 className="card-title">Name: {admin.name}</h2>
						<p>Instructor: {admin.instructor}</p>
						<p>Email: {admin.email}</p>
						<p>Price: {admin.price}</p>
						<p>Seat: {admin.seat}</p>
					</div>
					<div className="card-actions flex flex-col ms-20 text-end p-5">
						<button
							onClick={() => handleAccept(admin)}
							className="btn btn-outline btn-success"
						>
							Accept
						</button>
						<button
							onClick={() => handleDecline(admin._id)}
							className="btn btn-outline btn-error"
						>
							Decline
						</button>
						<Link to={`/dashboard/updatedclass/${admin._id}`}>
							<button className="btn btn-outline btn-warning">Update</button>
						</Link>
						<button className="btn btn-outline btn-info">Feedback</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ManageAddClass;
