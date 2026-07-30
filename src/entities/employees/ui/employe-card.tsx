import {
	Avatar,
	AvatarImage,
	Badge,
	DropdownMenuItem,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared"
import { columnData } from "@/widgets/employees/place-holder-data"
import { UserRoundPen } from "lucide-react"
import { FC, useEffect, useState } from "react"
import { IEmployee } from "../types/employees.type"
import { EmployeItems } from "./employe-items"

export const EmployeCard: FC<{ id: number }> = ({ id }) => {
	const [user, setUser] = useState<IEmployee | null>(null)

	useEffect(() => {
		setUser((prev) => {
			const find = columnData.find((user) => user.id === id)
			if (!find) return prev
			return find
		})
	}, [id])

	return (
		<Sheet>
			<SheetTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<UserRoundPen />
					Просмотр карточки сотрудника
				</DropdownMenuItem>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className="flex items-center gap-2">
						<Avatar size="lg">
							<AvatarImage src={user?.image} alt={user?.firstName} />
						</Avatar>
						<span className="font-bold">{user?.firstName}</span>
					</SheetTitle>
					<SheetDescription className="flex items-center gap-2">
						<Badge className="pb-0.5">{user?.role}</Badge>
					</SheetDescription>
				</SheetHeader>
				<EmployeItems user={user || {}} />
			</SheetContent>
		</Sheet>
	)
}
