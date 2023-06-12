import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import HomeClasses from '../HomeClasses/HomeClasses';
import Instructor from '../Instructor/Instructor';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Academy of Dance Art || Home</title>
			</Helmet>
			<Banner />
			<HomeClasses />
			<Instructor />
			<h2>This is Home</h2>
		</div>
	);
};

export default Home;
