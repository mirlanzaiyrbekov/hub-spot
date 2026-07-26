import { IEmployee } from "@/entities/employees/types/employees.type"
import {
	Avatar,
	AvatarImage,
	Badge,
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
	UserRoundPen,
} from "lucide-react"

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
			return (
				<>
					{working ? (
						<Badge className="bg-green-500 w-16 mx-auto">На смене</Badge>
					) : (
						<Badge className="bg-purple-500 w-20 mx-auto">Не в смене</Badge>
					)}
				</>
			)
		},
	},

	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "phone",
		header: "Телефон",
	},
	{
		id: "actions",
		header: "Действия",
		cell: ({ row }) => {
			const payment = row.original
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
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(String(payment.id))}
						>
							<MessageSquareMore />
							Отправить сообщение
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<UserRoundPen />
							Просмотр карточки сотрудника
						</DropdownMenuItem>
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
