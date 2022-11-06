import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CheckOut = () => {
	const { _id, title, price } = useLoaderData();

	const { user } = useContext(AuthContext);

	console.log(title);

	const submitHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const name = `${firstName} ${lastName}`;
		const phoneNumber = form.phoneNumber.value;
		const message = form.message.value;
		const email = user?.email || "unregistered";
		// console.log(message, firstName, lastName, phoneNumber);
		const order = {
			service: _id,
			serviceName: title,
			price,
			email,
			phoneNumber,
			message,
			customer: name,
		};
		fetch("http://localhost:5000/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((result) => result.json())
			.then((data) => {
				if (data.acknowledged) {
					form.reset();
				}
				console.log(data);
			})
			.catch((err) => console.log(err));
		console.log(order);
	};
	return (
		<div>
			<form onSubmit={submitHandler} className="text-center w-[80%] mx-auto">
				<h1 className="text-3xl">You are about to order: {title}</h1>
				<h4 className="text-xl my-5">Price: ${price}</h4>
				<div className="grid grid-cols-2 w-full justify-items-center gap-10 my-5">
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						className="input input-bordered input-success  w-full max-w-lg "
					/>
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						className="input input-bordered input-success w-full max-w-lg"
					/>
					<input
						type="text"
						placeholder="Your phonenumber..."
						className="input input-bordered input-success w-full max-w-lg"
						name="phoneNumber"
						required
					/>
					<input
						type="email"
						placeholder="Your email...."
						defaultValue={user?.email}
						readOnly
						className="input input-bordered input-success w-full max-w-lg"
					/>
				</div>
				<textarea
					className="textarea textarea-accent w-full  h-[150px] my-10 "
					placeholder="Description....."
					name="message"
				></textarea>
				<p className="text-center mb-10">
					<button type="submit" className="btn btn-active btn-primary w-1/3 ">
						submit
					</button>
				</p>
			</form>
		</div>
	);
};

export default CheckOut;
