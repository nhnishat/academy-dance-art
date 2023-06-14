import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layouts/Dashboard';
import Main from '../Layouts/Main';
import AllClass from '../Pages/AllClasses/AllClass';
import AllInstructor from '../Pages/AllInstrctor/AllInstructor';
import ManageAddClass from '../Pages/Dashboard/Admin/ManageAddClass';
import ManageUser from '../Pages/Dashboard/Admin/ManageUser';
import UpdateClass from '../Pages/Dashboard/Admin/UpdateClass';
import AddAClass from '../Pages/Dashboard/Instructor/AddAClass';
import EnrollClass from '../Pages/Dashboard/NormalUser/EnrollClass';
import PaymentHistory from '../Pages/Dashboard/NormalUser/PaymentHistory';
import UserAllClasses from '../Pages/Dashboard/NormalUser/UserAllClasses';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import Payment from '../Pages/Payment/Payment';
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
						<ManageUser />
					</AdminRoute>
				),
			},
			{
				path: 'adminaddclass',
				element: <ManageAddClass />,
			},

			{
				path: 'updatedclass/:id',
				element: <UpdateClass />,
			},
			// Instructor Route
			{
				path: 'addclass',
				element: <AddAClass />,
			},
			// user
			{
				path: 'allclasses',
				element: <UserAllClasses />,
			},
			{
				path: 'selectedclass',
				element: <EnrollClass />,
			},
			{
				path: 'payment/:id',
				element: <Payment />,
			},
			{
				path: 'history',
				element: <PaymentHistory />,
			},
		],
	},
]);

export default router;
