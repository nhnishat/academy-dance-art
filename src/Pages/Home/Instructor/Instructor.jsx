import useInstructors from '../../../hooks/useInstructors';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Instructor = () => {
	const [instructors, isLoading] = useInstructors();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto py-8">
			<SectionTitle
				heading="Top Instructors"
				subheading="Popular Instructors Section"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
				{instructors.map((instructor) => (
					<div
						key={instructor._id}
						className="bg-white shadow-md rounded-md p-4"
					>
						<img
							src={instructor?.image}
							alt="Instructor"
							className="w-full h-48 object-cover rounded-md mb-4"
						/>
						<div className="text-center">
							<h2 className="text-xl font-semibold">{instructor?.name}</h2>
							<p className="text-gray-500">{instructor?.email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Instructor;
