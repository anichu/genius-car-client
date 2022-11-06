import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
const Login = () => {
	const { signInWithUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location?.state?.from?.pathname || "/";
	const submitHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signInWithUser(email, password)
			.then((user) => {
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col-reverse justify-around w-full  lg:flex-row">
				<div className="text-center lg:text-left w-[40%]">
					<img src={logo} alt="" />
				</div>
				<div className="card flex-shrink-0 w-[60%] max-w-sm shadow-2xl bg-base-100">
					<h1 className="text-5xl font-bold text-center pt-5">Login</h1>
					<form onSubmit={submitHandler} className="card-body w-full">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="email"
								className="input input-bordered"
								name="email"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								name="password"
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
						<p>
							new to genius car?{" "}
							<Link to="/signup" className="text-orange-600">
								Signup
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
