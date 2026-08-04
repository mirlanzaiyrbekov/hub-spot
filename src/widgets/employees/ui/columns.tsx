import { IEmployee } from "@/entities/employees/types/employees.type"
import {
	Avatar,
	AvatarImage,
	Button,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared"
import { ColumnDef } from "@tanstack/react-table"
import { MoveRight, Plus, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import { EmployeeStatus } from "./employee-status"

export const columns: ColumnDef<IEmployee>[] = [
	{
		accessorKey: "image",
		header: "Изображение",
		cell: ({ row }) => (
			<Avatar className="mx-auto" size="lg">
				<AvatarImage src={row.original.image} alt={row.original.firstName} />
			</Avatar>
		),
	},
	{
		accessorKey: "firstName",
		header: "Имя",
	},
	{
		accessorKey: "working",
		header: "Статус",
		cell: ({ row }) => {
			const working = row.original.working
			return <EmployeeStatus status={working} />
		},
	},

	{
		accessorKey: "phone",
		header: "Телефон",
	},
	{
		accessorKey: "profit",
		header: "Прибыль за смену",
		cell: ({ row }) => (
			<div className="flex items-center gap-1.5 justify-center">
				<span className="font-medium flex items-center">
					<Plus className="size-3.5 text-green-700" />
					{row.original.profit}
				</span>
				<b className="text-xs font-bold">сом</b>
			</div>
		),
	},
	{
		id: "actions",
		header: "Просмотр",
		cell: ({ row }) => {
			return (
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							to={`/employee/${row.original.id}`}
							className="flex justify-center"
						>
							<Button variant="outline" size="xs" className="flex items-center">
								<UserRound />
								<MoveRight />
							</Button>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="left">
						Просмотр карточки сотрудника
					</TooltipContent>
				</Tooltip>
			)
		},
	},
]
