import { columns, DataTable } from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
import { FC } from "react"

export const EmployeesPage: FC = () => {
	return (
		<>
			<section className="px-1.5 py-2.5">
				<DataTable data={columnData} columns={columns} />
			</section>
		</>
	)
}
