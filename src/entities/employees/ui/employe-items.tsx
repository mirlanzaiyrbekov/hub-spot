import {
	Button,
	Calendar,
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
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/shared"
import { EmployeeStatus } from "@/widgets"
import { BadgeCheckIcon, CalendarIcon, ChevronLeft, Info } from "lucide-react"
import { FC } from "react"
import { IEmployee } from "../types/employees.type"

export const EmployeItems: FC<{ user: IEmployee }> = ({ user }) => {
	return (
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
				<TooltipContent className="text-center" side="bottom" align="center">
					Когда сотрудник работает от 1года. Выдается подтверждение
				</TooltipContent>
			</Tooltip>
			<Item variant="outline">
				<ItemContent>
					<ItemTitle>Общие показатели</ItemTitle>
					<ItemDescription className="text-primary">
						<ul className="flex flex-col gap-1 py-2">
							<li className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">
									прибыль за сегодня
								</span>
								<span className="font-medium text-sm">1242.0 KGS</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">
									прибыль за три месяца
								</span>
								<span className="font-medium text-sm">14523.5 KGS</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="text-xs text-muted-foreground">
									прибыль за неделю
								</span>
								<span className="font-medium text-sm">3252.2 KGS</span>
							</li>
						</ul>
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="outline">
				<ItemContent className="flex items-start gap-3">
					<ItemTitle>
						<EmployeeStatus status={user.working} />
					</ItemTitle>
					<ItemDescription className="flex items-center justify-between w-full">
						<div className="flex items-center gap-1">
							<Info className="size-3" />
							Статус
						</div>
						<small>осталось 2 дня</small>
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
	)
}
