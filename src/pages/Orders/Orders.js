import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setOrders(data);
				console.log(data);
			})
			.catch((err) => console.log(err.message));
	}, [user]);
	const deleteHandler = (id) => {
		fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					const restOfOrders = orders.filter((order) => order._id !== id);
					setOrders(restOfOrders);
				}
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const updateHandler = (id) => {
		fetch(`http://localhost:5000/orders/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					const filteredObj = orders.filter((order) => order._id !== id);
					const pending = orders.find((order) => order._id === id);
					pending.status = "Approved";
					setOrders([...filteredObj, pending]);
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full my-10">
				<thead>
					<tr>
						<th>Delete</th>
						<th>Image</th>
						<th>Name</th>
						<th>Phonenumber</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order) => (
							<OrderRow
								order={order}
								key={order._id}
								deleteHandler={deleteHandler}
								updateHandler={updateHandler}
							></OrderRow>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
