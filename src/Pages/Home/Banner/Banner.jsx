import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
const Banner = () => {
	return (
		<Carousel>
			<div>
				<img src="https://i.ibb.co/SXWSMwj/pexels-jansel-ferma-3949681.jpg" />
			</div>
			<div>
				<img src="https://i.ibb.co/vXTfLNP/pexels-tim-gouw-175658.jpg" />
			</div>
			<div>
				<img src="https://i.ibb.co/M9tK41J/ketan-rajput-n-g7dgw-NZg4-unsplash.jpg" />
			</div>
			<div>
				<img src="https://i.ibb.co/wdL0mwp/david-hofmann-Xm-D4gx8js-XE-unsplash.jpg" />
			</div>
			<div>
				<img src="https://i.ibb.co/30XBzFC/kazuo-ota-lq-E2wn-S8-Cr-I-unsplash.jpg" />
			</div>
			<div>
				<img src="https://i.ibb.co/1nYHHjV/breakreate-A-If-Og-YEQU4-unsplash.jpg" />
			</div>
		</Carousel>
	);
};

export default Banner;
