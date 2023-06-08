import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import SingUp from '../Pages/SingUp/SingUp';
import SingIn from '../Pages/Singin/SingIn';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
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
