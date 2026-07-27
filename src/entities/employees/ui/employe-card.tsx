import {
	DropdownMenuItem,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared"
import { UserRoundPen } from "lucide-react"
import { FC, useState } from "react"

export const EmployeCard: FC = () => {
	const [open, setOpen] = useState(false)
	return (
		<Sheet>
			<SheetTrigger asChild>
				<DropdownMenuItem
					onSelect={(e) => {
						e.preventDefault()
						setOpen(true)
					}}
				>
					<UserRoundPen />
					Просмотр карточки сотрудника
				</DropdownMenuItem>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>This action cannot be undone.</SheetDescription>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-6 px-4">
					<div className="grid gap-3">User</div>
					<div className="grid gap-3">User LastName</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
