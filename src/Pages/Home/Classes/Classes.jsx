import useClasses from '../../../hooks/useClasses';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Classes = () => {
	const [classes] = useClasses();
	// console.log(classes);
	return (
		<div className="my-20">
			<SectionTitle
				subheading={'Popular Classes Section'}
				heading={'Top Class'}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{classes.slice(0, 6).map((danceClass) => (
					<div key={danceClass._id} className="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img
								src={danceClass.image}
								style={{ width: '100%', height: '600px' }}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{danceClass.name}</h2>
							<p>{danceClass.price}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Enroll Now</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Classes;
