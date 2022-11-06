import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <Signup></Signup>,
			},
			{
				path: "/checkout/:id",
				element: <CheckOut></CheckOut>,
				loader: ({ params }) => {
					return fetch(`http://localhost:5000/services/${params.id}`);
				},
			},
			{
				path: "/orders",
				element: (
					<PrivateRoute>
						<Orders></Orders>
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
