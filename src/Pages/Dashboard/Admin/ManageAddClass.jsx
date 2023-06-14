import { Link } from 'react-router-dom';
import useRequestAdmin from '../../../hooks/useRequestAdmin';

const ManageAddClass = () => {
	const [adminRequest, refetch] = useRequestAdmin();
	// const axiosSecure = useAxiosSecure();

	const handleAccept = (admin) => {
		fetch(
			`https://academy-of-dace-art-server.vercel.app/classes/${admin._id}`,
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(admin),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				refetch();
			});
	};

	const handleDecline = (id) => {
		fetch(`https://academy-of-dace-art-server.vercel.app/requestadmin/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				refetch();
			});
	};

	console.log(adminRequest);
	return (
		<div>
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
