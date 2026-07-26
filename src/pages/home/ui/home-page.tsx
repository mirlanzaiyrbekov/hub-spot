import { RevenueChart } from "@/features"
import {
	columns,
	Customers,
	DataTable,
	Entries,
	InsightsCard,
	Revenues,
} from "@/widgets"
import { FC } from "react"

export const Home: FC = () => {
	return (
		<>
			<section
				className="
					grid grid-cols-1 gap-1.5
					xl:grid-cols-2
					2xl:grid-cols-3
					3xl:grid-cols-4
				"
			>
				<Revenues />
				<Customers />
				<Entries />
				<InsightsCard />
				<div className="xl:col-span-2 3xl:col-span-4">
					<RevenueChart />
				</div>

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
					]}
					columns={columns}
				/>
			</section>
		</>
	)
}
