import React from "react";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
	const { img, price, title, _id } = service;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-2 pt-10">
				<img src={img} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{title}</h2>
				<p className="text-2xl text-orange-600 font-semibold">
					Price: ${price}
				</p>
				<div className="card-actions justify-end">
					<Link to={`/checkout/${_id}`}>
						<button className="btn btn-primary">Buy Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
