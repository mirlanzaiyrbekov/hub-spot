import { columns, DataTable } from "@/widgets"
import { FC } from "react"

export const EmployeesPage: FC = () => {
	return (
		<>
			<section className="px-1.5 py-2.5">
				<DataTable
					data={[
						{
							age: 31,
							email: "mirlan@gmail.com",
							firstName: "Mirlan",
							id: 1,
							image:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTz-pjKRs_pu9EI4F7z2b5ruOXFLwIQYyRSY0fTDP4Z8qo3j94hBG4A6PB&s=10",
							lastName: "Mambetov",
							phone: "0505342345",
							working: true,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
						{
							age: 22,
							email: "mirlan@gmail.com",
							firstName: "Mirlan2",
							id: 33,
							image:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h2AsfmqmTHAlcgUy3yZjCjEKGGqSeC9aFDua15WykA&s=10",
							lastName: "Mambetov",
							phone: "0505342345",
							working: false,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
						{
							age: 21,
							email: "prince@gmail.com",
							firstName: "Prince",
							id: 23,
							image:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ08WuooupwbzcYEWwvzKQad6pP2VIQoBjXxSKA98GQrkmg--QLLe32qg&s=10",
							lastName: "Prince2",
							phone: "0521456652",
							working: true,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
						{
							age: 29,
							email: "duisenova.ak@gmail.com",
							firstName: "Akcholpon",
							id: 35,
							image:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMvlAY8Hicdaga--d8JLl_iXtOlbbFK32iUrawHUe2qg5H-0QmhVVvHOh&s=10",
							lastName: "Duisenova",
							phone: "0995960211",
							working: false,
							address: {
								city: "Bishkek",
								postalCode: "412421",
								state: "Chui",
								stateCode: "312",
								street: "Phuchic",
							},
						},
					]}
					columns={columns}
				/>
			</section>
		</>
	)
}
