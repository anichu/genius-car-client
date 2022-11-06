import React, { useEffect, useState } from "react";

const OrderRow = ({ order, deleteHandler, updateHandler }) => {
	const { phoneNumber, _id, service, price, serviceName } = order;
	const [serviceDetails, setServiceDetails] = useState();
	useEffect(() => {
		fetch(`http://localhost:5000/services/${service}`)
			.then((res) => res.json())
			.then((data) => {
				setServiceDetails(data);
			});
	}, [service]);
	return (
		<tr>
			<th>
				<label className="cursor-pointer" onClick={() => deleteHandler(_id)}>
					<span className="btn btn-ghost btn-xs">X </span>
				</label>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img
								src={serviceDetails?.img}
								alt="Avatar Tailwind CSS Component"
							/>
						</div>
					</div>
				</div>
			</td>
			<td>
				<div>
					<div className="font-bold">{serviceName}</div>
					<div className="text-sm opacity-50">Price: ${price}</div>
				</div>
			</td>
			<td>{phoneNumber}</td>
			<th>
				<button
					className="btn btn-ghost btn-xs"
					onClick={() => updateHandler(_id)}
				>
					{order?.status ? order.status : "pending"}
				</button>
			</th>
		</tr>
	);
};

export default OrderRow;
