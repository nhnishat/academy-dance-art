const SectionTitle = ({ heading, subheading }) => {
	return (
		<div className="my-20 text-center">
			<h3 className="text-xl uppercase font-semibold p-3 my-2">
				--- {subheading} ---
			</h3>
			<h3 className="text-3xl  text-yellow-500 font-bold">{heading} </h3>
		</div>
	);
};

export default SectionTitle;
