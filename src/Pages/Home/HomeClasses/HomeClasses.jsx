import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useClasses from '../../../hooks/useClasses';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const HomeClasses = () => {
	const [classes] = useClasses();
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleEnroll = (item) => {
		if (user && user.email) {
			const menuItem = {
				itemId: item._id,
				name: item.name,
				image: item.image,
				price: item.price,
				category: item.category,
				email: user.email,
				instructor: item.instructor,
				seat: item.available_seats,
			};

			fetch('https://academy-of-dace-art-server.vercel.app/class', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(menuItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Successfully Added to the Cart',
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		} else {
			Swal.fire({
				title: 'Please Login',
				text: 'You need to login to enroll in this class',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Login Now!',
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/singin');
				}
			});
		}
	};

	return (
		<div className="container mx-auto py-8">
			<SectionTitle subheading="Dance" heading="Top Dance Classes" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{classes.slice(0, 6).map((danceClass) => (
					<div
						key={danceClass._id}
						className="bg-white shadow-md rounded-md p-4"
					>
						<figure>
							<img
								src={danceClass.image}
								alt="Class"
								className="w-full h-48 object-cover rounded-md mb-4"
							/>
						</figure>
						<div className="text-center">
							<h2 className="text-lg font-semibold mb-2">{danceClass.name}</h2>
							<p className="text-gray-500 mb-2">
								Instructor: {danceClass.instructor}
							</p>
							<p className="text-gray-500 mb-2">
								Available Seats: {danceClass.seat}
							</p>
							<p className="text-gray-500 mb-2">Price: ${danceClass.price}</p>
							<button
								onClick={() => handleEnroll(danceClass)}
								className="btn btn-primary"
							>
								Enroll Now
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeClasses;
