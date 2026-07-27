import { RevenueChart } from "@/features"
import {
	columns,
	Customers,
	DataTable,
	Entries,
	InsightsCard,
	Revenues,
} from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
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

				<DataTable data={columnData} columns={columns} />
			</section>
		</>
	)
}
