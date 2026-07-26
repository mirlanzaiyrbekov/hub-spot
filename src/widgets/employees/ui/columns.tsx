import { IEmployee } from "@/entities/employees/types/employees.type"
import { Badge, Checkbox } from "@/shared"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<IEmployee>[] = [
	{
		id: "select",
		accessorKey: "id",
		header: ({ table }) => (
			<div>
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Выбрать все"
				/>
			</div>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Выбрать колонку"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "image",
		header: "Аватар",
		cell: ({ row }) => (
			<img
				className="mx-auto"
				width={40}
				height={20}
				src={row.original.image}
				alt={row.original.firstName}
			/>
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
						<Badge className="bg-green-500 w-16 mx-auto">Работает</Badge>
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
]
