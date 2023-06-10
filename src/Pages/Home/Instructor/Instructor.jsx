import useInstructor from '../../../hooks/useInstructor';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Instructor = () => {
	const [instructors, isLoading, error] = useInstructor();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<SectionTitle
				heading="Top Instructors"
				subheading="Popular Instructors Section"
			/>
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

export default Instructor;
