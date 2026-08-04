import { EmployeePage, EmployeesPage, Home, NotFound } from "@/pages"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/employees",
				element: <EmployeesPage />,
				errorElement: <NotFound />,
			},
			{
				path: "/employee/:id",
				element: <EmployeePage />,
				errorElement: <NotFound />,
			},
		],
		errorElement: <NotFound />,
	},
])
