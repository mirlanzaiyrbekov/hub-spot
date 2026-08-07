import { Badge } from "@/shared"
import { FC } from "react"

export const EmployeeStatus: FC<{ status?: boolean }> = ({
	status = false,
}) => {
	return (
		<>
			{status ? (
				<Badge className="bg-green-500 w-16">На смене</Badge>
			) : (
				<Badge className="bg-purple-500 w-20">Отдых</Badge>
			)}
		</>
	)
}
