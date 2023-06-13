import useInstructors from '../../hooks/useInstructors';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const AllInstructor = () => {
	const [instructors, isLoading] = useInstructors();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div
				className="hero"
				style={{
					width: '100%',
					height: '600px',
					backgroundImage:
						"url('https://i.ibb.co/PzJ7mnG/danielle-cerullo-3ck-WUna-Cxzc-unsplash.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md mx-auto">
						<h1 className="text-5xl font-bold mb-5">Instructors</h1>
						<p className="mb-8">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-10">
				<SectionTitle
					heading="All Instructors"
					subheading="Meet Our Talented Instructors"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{instructors.map((instructor) => (
						<div key={instructor._id} className="bg-white rounded-lg shadow-xl">
							<img
								src={instructor?.image}
								alt="Instructor"
								className="h-64 w-full object-cover rounded-t-lg"
							/>
							<div className="p-4">
								<h2 className="text-xl font-bold mb-2">{instructor?.name}</h2>
								<p className="text-gray-500">{instructor?.email}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllInstructor;
