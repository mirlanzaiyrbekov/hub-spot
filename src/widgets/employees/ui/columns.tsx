import { EmployeCard } from "@/entities/employees"
import { IEmployee } from "@/entities/employees/types/employees.type"
import {
	Avatar,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/shared"
import { ColumnDef } from "@tanstack/react-table"
import {
	Ban,
	ClipboardPen,
	MessageSquareMore,
	MoreHorizontal,
	Plus,
} from "lucide-react"
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
		header: "Действия",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Открыть меню</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="rounded-sm w-full">
						<DropdownMenuLabel>Действия</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<MessageSquareMore />
							Отправить сообщение
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<EmployeCard id={row.original.id} />
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<ClipboardPen />
							Запись сотруднику
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-purple-700">
							<Ban />
							Отправить в бан (штраф)
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
