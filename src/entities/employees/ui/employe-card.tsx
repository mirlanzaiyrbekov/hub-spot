import {
	Avatar,
	AvatarImage,
	Badge,
	Button,
	Calendar,
	DropdownMenuItem,
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
	Marker,
	MarkerContent,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared"
import { EmployeeStatus } from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
import {
	BadgeCheckIcon,
	CalendarIcon,
	ChevronLeft,
	Info,
	UserRoundPen,
} from "lucide-react"
import { FC, useEffect, useState } from "react"
import { IEmployee } from "../types/employees.type"

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
				<div className="flex w-full max-w-md flex-col gap-6 px-4">
					<Tooltip>
						<TooltipTrigger asChild>
							<Item variant="outline" size="sm">
								<a href="#" className="flex items-center justify-between gap-2">
									<ItemMedia>
										<BadgeCheckIcon className="size-5" />
									</ItemMedia>
									<ItemContent>
										<ItemTitle>Подтвержденный профиль</ItemTitle>
									</ItemContent>
								</a>
							</Item>
						</TooltipTrigger>
						<TooltipContent
							className="text-center"
							side="bottom"
							align="center"
						>
							Когда сотрудник работает от 1года. Выдается подтверждение
						</TooltipContent>
					</Tooltip>
					<Item variant="outline">
						<ItemContent>
							<ItemTitle>Показатели</ItemTitle>
							<ItemDescription className="text-primary">
								<ul className="flex flex-col gap-1 py-2">
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">
											прибыль за 28.07.2025
										</span>
										<span className="font-medium">1242.0 KGS</span>
									</li>
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">
											прибыль за три месяца
										</span>
										<span className="font-medium">14523.5 KGS</span>
									</li>
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">
											прибыль за неделю
										</span>
										<span className="font-medium">3252.2 KGS</span>
									</li>
								</ul>
							</ItemDescription>
						</ItemContent>
					</Item>
					<Item variant="outline">
						<ItemContent className="flex items-start gap-3">
							<ItemTitle>
								<Info className="size-4" />
								Статус
							</ItemTitle>
							<ItemDescription className="flex items-center gap-3">
								<EmployeeStatus status={user?.working} />
							</ItemDescription>
						</ItemContent>
					</Item>
					<Marker variant="separator">
						<MarkerContent>Рабочая смена</MarkerContent>
					</Marker>
					<Item variant="muted" size="xs" className="p-3">
						<div className="flex items-center gap-2">
							<Popover>
								<PopoverTrigger>
									<Button
										variant="outline"
										id="date-picker-range"
										className="justify-start px-2.5 font-normal"
									>
										<CalendarIcon />
										<span className="text-sm">Выбрать дату смены</span>
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar mode="range" numberOfMonths={1} />
								</PopoverContent>
							</Popover>
							<div className="flex items-center gap-1.5 text-xs pb-1">
								<ChevronLeft className="size-4" />
								Задайте дату смены
							</div>
						</div>
					</Item>
				</div>
			</SheetContent>
		</Sheet>
	)
}
