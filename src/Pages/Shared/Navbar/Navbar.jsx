import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
	const { user, logOut } = useAuth();

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};

	const navOptions = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/instructor"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Instructors
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/classes"
					className={({ isActive }) =>
						isActive ? 'text-purple-500' : 'default'
					}
				>
					Classes
				</NavLink>
			</li>
			{user && (
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? 'text-purple-500' : 'default'
						}
					>
						Dashboard
					</NavLink>
				</li>
			)}
		</>
	);

	return (
		<>
			<div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box lg:w-52 sm:bg-white opacity-30 text-black"
						>
							{navOptions}
						</ul>
					</div>
					<Link to="/">
						<img
							src="https://i.ibb.co/LhBdvMy/dance-academy-grand-rapids-logo-f-removebg-preview.png"
							alt="logo"
							className="h-20 w-20"
						/>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navOptions}</ul>
				</div>
				<div className="navbar-end">
					{user ? (
						<>
							<img
								src={user?.photoURL}
								alt="img"
								className="w-16 h-16 rounded-full text-center"
							/>
							<button onClick={handleLogOut} className="btn btn-ghost">
								LogOut
							</button>
						</>
					) : (
						<>
							<button className="mr-3">
								<NavLink
									to="/singin"
									className={({ isActive }) =>
										isActive ? 'text-purple-500' : 'default'
									}
								>
									Sing in
								</NavLink>
							</button>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
