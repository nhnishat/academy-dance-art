import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
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
			<Category />
			<Instructor />
		</div>
	);
};

export default Home;
