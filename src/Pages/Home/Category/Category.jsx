const Category = () => {
	return (
		<div className="flex justify-center items-center py-10 gap-5">
			<div className="text-center w-1/2">
				<h2 className="text-4xl md:text-6xl font-bold mb-6">
					LEARN FROM THE
					<br />
					<span className="text-yellow-600 uppercase">WORLD'S TOP DANCERS</span>
				</h2>
				<p className="text-lg md:text-xl text-gray-700">
					DNCR Academy brings you lessons straight from the world's biggest
					dancers! Get step-by-step lessons from each instructor on the styles
					that have helped them blow up on social media!
				</p>
			</div>
			<div className="grid grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-0 w-1/2">
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
					<img
						className="w-full h-auto"
						src="https://i.ibb.co/dJfZPwJ/DNCRAcademy-Instructor-Cards-Matt-Color-01.jpg"
						alt="Matt"
					/>
				</div>
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
					<img
						className="w-full h-auto"
						src="https://i.ibb.co/w4vZRPF/DNCRAcademy-Instructor-Cards-Bailey-Color-01.jpg"
						alt="Bailey"
					/>
				</div>
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
					<img
						className="w-full h-auto"
						src="https://i.ibb.co/fNTWZL0/DNCRAcademy-Instructor-Cards-Vanseco-Color-01.jpg"
						alt="Vanseco"
					/>
				</div>
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
					<img
						className="w-full h-auto"
						src="https://i.ibb.co/M8WwkZX/DNCRAcademy-Instructor-Cards-Fikshun-Color-01.jpg"
						alt="Fikshun"
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
