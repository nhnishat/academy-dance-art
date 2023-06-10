import useClasses from '../../../hooks/useClasses';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Classes = () => {
	const [classes] = useClasses();
	console.log(classes);
	return (
		<div>
			<SectionTitle
				subheading={'Popular Classes Section'}
				heading={'Top Class'}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{classes.slice(0, 6).map((danceClass) => (
					<div key={danceClass._id} className="card w-96 bg-base-100 shadow-xl">
						<figure className="px-10 pt-10">
							<img src={danceClass.image} alt="images" className="rounded-xl" />
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Name: {danceClass.name}</h2>
							<p>Available Seat: {danceClass.seat}</p>
							<div className="card-actions">
								<button className="btn btn-primary">Enroll</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Classes;
