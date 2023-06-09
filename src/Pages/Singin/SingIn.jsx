import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
	const { signIn } = useAuth();
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		signIn(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Helmet>
				<title>Academy of Dance Art || Sing in</title>
			</Helmet>
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row gap-12">
					<div className="text-center lg:text-left w-1/2">
						<img
							src="https://i.ibb.co/BfN0wg3/undraw-Login-re-4vu2.png"
							alt=""
						/>
					</div>
					<div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										className="input input-bordered"
										{...register('email', { required: true })}
									/>
									{errors.email && (
										<span className="text-red-600">This field is required</span>
									)}
								</div>
								<div className="relative">
									<div className="form-control">
										<label className="label">
											<span className="label-text">Password</span>
										</label>
										<input
											type={showPassword ? 'text' : 'password'}
											placeholder="password"
											className="input input-bordered"
											name="password"
											{...register('password', { required: true })}
										/>
										{errors.password && (
											<span className="text-red-600">
												This field is required
											</span>
										)}
										<Link
											onClick={() => {
												setShowPassword(!showPassword);
											}}
											className="absolute bottom-[7px] end-0 p-2 text-black text-center "
										>
											{showPassword ? <FaEye /> : <FaEyeSlash />}
										</Link>
									</div>
								</div>
								<div className="form-control mt-6">
									<input
										type="submit"
										value="Login"
										className="btn btn-primary"
									/>
								</div>
							</div>
						</form>
						<p className="m-auto p-3">
							<small>
								New Here?{' '}
								<Link to="/singup" className="text-orange-600 underline">
									Create an account
								</Link>
							</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
