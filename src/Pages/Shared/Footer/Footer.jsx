const Footer = () => {
	return (
		<footer className="p-10 bg-base-200 text-base-content my-20">
			<div className="flex flex-col sm:flex-row justify-between mx-12">
				<div>
					<img
						src="https://i.ibb.co/4mT5qK2/dance-academy-grand-rapids-logo-f.png"
						alt=""
						className="w-24 h-24"
					/>
					<p className="font-bold">
						Mc Farlane Toys Ltd.
						<br />
						Providing reliable tech since 2000
					</p>
				</div>
				<div>
					<span className="footer-title">Services</span>
					<div className="my-3">
						<p className="link link-hover">Branding</p>
						<p className="link link-hover">Design</p>
						<p className="link link-hover">Marketing</p>
						<p className="link link-hover">Advertisement</p>
					</div>
				</div>
				<div>
					<span className="footer-title">Company</span>
					<div className="mt-3">
						<p className="link link-hover">About us</p>
						<p className="link link-hover">Contact</p>
						<p className="link link-hover">Jobs</p>
						<p className="link link-hover">Press kit</p>
					</div>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<div className="mt-3">
						<p className="link link-hover">Terms of use</p>
						<p className="link link-hover">Privacy policy</p>
						<p className="link link-hover">Cookie policy</p>
					</div>
				</div>
			</div>
			<hr className="text-gray-900 my-4 border-2" />
			<div className="flex flex-col sm:flex-row justify-between items-center mx-12">
				<p>@2023 Mc Farlane Toys. All Rights Reserved</p>
				<div className="">
					<div className="flex gap-3">
						<img
							src="https://i.ibb.co/wskLnmm/Facebook-logo.png"
							alt=""
							className="w-10 h-10 rounded-lg"
						/>
						<img
							src="https://i.ibb.co/vv287wt/github-PNG84.png"
							alt=""
							className="w-10 h-10"
						/>
						<img
							src="https://i.ibb.co/DVf4DvH/google-logo-clipart-transparent-removebg-preview.png"
							alt=""
							className="w-10 h-10"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
