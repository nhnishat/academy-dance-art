import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import SingUp from '../Pages/SingUp/SingUp';
import SingIn from '../Pages/Singin/SingIn';
const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error />,
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'singin',
				element: <SingIn />,
			},
			{
				path: 'singup',
				element: <SingUp />,
			},
		],
	},
]);

export default router;
