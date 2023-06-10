import useInstructors from '../../hooks/useInstructors';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const AllInstructor = () => {
	const [instructors, isLoading] = useInstructors();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
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
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Instructor</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
				</div>
			</div>
			<SectionTitle heading="Instructors" subheading="All Instructors " />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{instructors.map((instructor) => (
					<div
						key={instructor._id}
						className="card card-compact w-96 bg-base-100 shadow-xl"
					>
						<figure>
							<img
								src={instructor?.image}
								alt="Instructor"
								className="h-96 w-full"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{instructor?.name}</h2>
							<p>{instructor?.email}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AllInstructor;
