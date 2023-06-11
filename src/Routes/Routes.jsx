import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layouts/Dashboard';
import Main from '../Layouts/Main';
import AllClass from '../Pages/AllClasses/AllClass';
import AllInstructor from '../Pages/AllInstrctor/AllInstructor';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AllStudent from '../Pages/Dashboard/AllUsers/Instructor/instructorUser/AllStudent';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import SingUp from '../Pages/SingUp/SingUp';
import SingIn from '../Pages/Singin/SingIn';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
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
				path: '/classes',
				element: <AllClass />,
			},
			{
				path: '/instructor',
				element: <AllInstructor />,
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
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: 'alluser',
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
			{
				path: 'instructorUser',
				element: <AllStudent />,
			},
		],
	},
]);

export default router;
