import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	const { user } = useAuth();

	return (
		<div className="drawer lg:drawer-open">
			<Helmet>
				<title>Academy of Dance Art || DashBoard</title>
			</Helmet>
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				<Outlet />
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
					{isAdmin && (
						<>
							<li>
								<Link to="/dashboard/alluser">
									<Fade>ManageUser</Fade>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/adminaddclass">
									<Fade>Manage Add Class</Fade>
								</Link>
							</li>
						</>
					)}
					{isInstructor && (
						<>
							<li>
								<Link to="/dashboard/addclass">
									<Fade>Add A Class</Fade>
								</Link>
							</li>
						</>
					)}
					{user && !isAdmin && !isInstructor && (
						<>
							<li>
								<Link to="/dashboard/allclasses">
									<Fade>All Classes</Fade>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/selectedclass">
									<Fade>Enroll Class</Fade>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/history">
									<Fade>Payment History</Fade>
								</Link>
							</li>
						</>
					)}
					<div className="divider"></div>
					<li>
						<Link to="/">
							<Fade>Home</Fade>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
