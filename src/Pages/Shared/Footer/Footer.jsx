const Footer = () => {
	return (
		<footer className="p-10 bg-base-200 text-base-content my-20">
			<div className="flex flex-col sm:flex-row justify-between mx-12">
				<div className="flex items-center">
					<img
						src="https://i.ibb.co/4mT5qK2/dance-academy-grand-rapids-logo-f.png"
						alt=""
						className="w-20 h-20 mr-4"
					/>
					<div>
						<h2 className="text-lg font-bold">Academy of Dance Art Ltd.</h2>
						<p className="text-sm">Providing reliable tech since 2000</p>
						<p className="mt-2 text-sm">
							123 Main Street, Cityville, ABC 12345
						</p>
						<p className="text-sm">Phone: 123-456-7890</p>
						<p className="text-sm">Email: info@academyofdance Art.com</p>
					</div>
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
						<p className="link link-hover">About Us</p>
						<p className="link link-hover">Contact</p>
						<p className="link link-hover">Careers</p>
						<p className="link link-hover">Press Kit</p>
					</div>
				</div>
				<div>
					<span className="footer-title">Legal</span>
					<div className="mt-3">
						<p className="link link-hover">Terms of Use</p>
						<p className="link link-hover">Privacy Policy</p>
						<p className="link link-hover">Cookie Policy</p>
					</div>
				</div>
			</div>
			<hr className="text-gray-900 my-4 border-2" />
			<div className="flex flex-col sm:flex-row justify-between items-center mx-12">
				<p className="text-sm">
					@2023 Academy of Dance Art. All Rights Reserved
				</p>
				<div className="">
					<div className="flex gap-3">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://i.ibb.co/wskLnmm/Facebook-logo.png"
								alt="Facebook"
								className="w-8 h-8 rounded-lg"
							/>
						</a>
						<a
							href="https://www.github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://i.ibb.co/vv287wt/github-PNG84.png"
								alt="GitHub"
								className="w-8 h-8"
							/>
						</a>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://i.ibb.co/DVf4DvH/google-logo-clipart-transparent-removebg-preview.png"
								alt="Google"
								className="w-8 h-8"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
