import React from 'react';
import useClasses from '../../hooks/useClasses';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const AllClass = () => {
	const [classes] = useClasses();
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
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
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

export default AllClass;
