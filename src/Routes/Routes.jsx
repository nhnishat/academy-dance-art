import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layouts/Dashboard';
import Main from '../Layouts/Main';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AllStudent from '../Pages/Dashboard/AllUsers/Instructor/instructorUser/AllStudent';
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
	{
		path: 'dashboard',
		element: <Dashboard />,
		children: [
			{
				path: 'alluser',
				element: <AllUsers />,
			},
			{
				path: 'instructorUser',
				element: <AllStudent />,
			},
		],
	},
]);

export default router;
