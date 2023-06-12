import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useClasses from '../../hooks/useClasses';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const AllClass = () => {
	const [classes] = useClasses();
	// console.log(classes);

	const { user } = useAuth();
	const Navigate = useNavigate();

	// const [enrollStatus, setEnrollStatus] = useState({});

	const handleEnroll = (item) => {
		// console.log(item);
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

			fetch('http://localhost:5000/class', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(menuItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Successfully Added to the cart',
							showConfirmButton: false,
							timer: 1500,
						});
						// setEnrollStatus((prevState) => ({
						// 	...prevState,
						// 	[item._id]: true,
						// }));
					}
				});
		} else {
			Swal.fire({
				title: 'Please Login',
				text: 'You are about to delete this class',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Login Now!',
			}).then((result) => {
				if (result.isConfirmed) {
					Navigate('/login');
				}
			});
		}
	};
	return (
		<div>
			<div
				className="hero"
				style={{
					width: '100%',
					height: '600px',
					backgroundImage:
						"url('https://i.ibb.co/B2qP12y/chris-yang-7e-G2-LJ8f-Ss-E-unsplash.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Classes</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
			<SectionTitle subheading={'Dance'} heading={'Top Dance Classes'} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
				{classes.map((danceClass) => (
					<div key={danceClass._id} className="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img
								src={danceClass.image}
								style={{ width: '100%', height: '600px' }}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Name: {danceClass.name}</h2>
							<h2 className="card-title">
								instructor: {danceClass.instructor}
							</h2>
							<h2 className="card-title">Available seats: {danceClass.seat}</h2>
							<h2 className="card-title">Price: ${danceClass.price}</h2>

							<div className="card-actions justify-end">
								<button
									onClick={() => handleEnroll(danceClass)}
									className="btn btn-primary"
								>
									Enroll Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllClass;
