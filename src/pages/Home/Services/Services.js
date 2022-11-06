import React, { useEffect, useState } from "react";

import ServicesCard from "./ServicesCard";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((result) => result.json())
			.then((data) => setServices(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div className="text-center">
				<p className="text-2xl text-orange-600">Service</p>
				<h1 className="text-6xl mt-5">Our Service Area</h1>
				<p className="text-xl my-5">
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which don't look even slightly
					believable.
				</p>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center my-10 gap-5">
				{services.map((service) => (
					<ServicesCard key={service._id} service={service}></ServicesCard>
				))}
			</div>
		</div>
	);
};

export default Services;
