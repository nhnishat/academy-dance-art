import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Academy of Dance Art || Home</title>
			</Helmet>
			<Banner />
			<h2>This is Home</h2>
		</div>
	);
};

export default Home;
