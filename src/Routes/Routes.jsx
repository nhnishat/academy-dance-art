import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
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
		],
	},
]);

export default router;
