import { IEmployee } from "@/entities/employees/types/employees.type"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Card,
	CardContent,
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
	Separator,
} from "@/shared"
import { Customers, EmployeeStatus } from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
import { AlarmCheck, Ban, Calendar, Pencil } from "lucide-react"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeePage: FC = () => {
	const { id } = useParams<{ id: string }>()
	const [user, setUser] = useState<IEmployee | null>(null)

	useEffect(() => {
		setUser((prev) => {
			const find = columnData.find((user) => user.id === Number(id))
			if (!find) return prev
			return find
		})
	}, [id])

	return (
		<>
			<section>
				<div className="grid grid-cols-[auto_320px] gap-2">
					<Card>
						<CardContent className="grid grid-cols-[1fr_320px_1fr] gap-1.5 items-end min-w-80">
							<div className="flex items-end">
								<Item className="flex flex-col">
									<Avatar className="size-14 mx-auto">
										<AvatarImage src={user?.image} alt={user?.firstName} />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<ItemContent>
										<ItemTitle className="flex items-center justify-center w-full">
											{user?.lastName}
											<b>{user?.firstName}</b>
										</ItemTitle>
										<ItemDescription className="flex items-center justify-center gap-1 flex-col text-xs text-muted-foreground">
											<span className="flex gap-1.5 font-bold text-xs">
												Позиция: <b>{user?.role}</b>
											</span>
											<div className="flex items-center gap-1.5 my-1.5">
												{user?.address.city}
												<Separator orientation="vertical" />
												{user?.address.street}
												<Separator orientation="vertical" />
												{user?.phone}
											</div>
										</ItemDescription>
									</ItemContent>
								</Item>
								<Item>
									<ItemContent>
										<ItemTitle>Информация</ItemTitle>
										<ItemDescription className="text-xs text-muted-foreground flex gap-2">
											Должность:
											<b>Барбер</b>
										</ItemDescription>
										<ItemDescription className="text-xs text-muted-foreground flex gap-2">
											Статус:
											<EmployeeStatus />
										</ItemDescription>
										<ItemDescription className="text-xs text-muted-foreground flex gap-2">
											Телефон:
											<b>{user?.phone}</b>
										</ItemDescription>
									</ItemContent>
								</Item>
							</div>
							<Item>
								<ItemContent>
									<ItemTitle>Уровень дохода</ItemTitle>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Доход за три месяца:
										<b>12312.3 сом</b>
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Доход с 10.03.2022 по 17.03.2022:
										<b>3242.3 сом</b>
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Примерный профит до конца смены:
										<b>1231.2 сом</b>
									</ItemDescription>
								</ItemContent>
							</Item>
							<Item>
								<ItemContent>
									<ItemTitle>Уровень дохода</ItemTitle>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Доход за три месяца:
										<b>12312.3 сом</b>
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Доход с 10.03.2022 по 17.03.2022:
										<b>3242.3 сом</b>
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground flex gap-2">
										Примерный профит до конца смены:
										<b>1231.2 сом</b>
									</ItemDescription>
								</ItemContent>
							</Item>
							<div className="flex gap-2">
								<Button variant="outline" className="rounded-sm text-xs">
									Отправить уведомление
									<AlarmCheck />
								</Button>
								<Button variant="outline" className="rounded-sm text-xs">
									Редактировать
									<Pencil />
								</Button>
								<Button variant="outline" className="rounded-md text-xs">
									Назначить смену
									<Calendar />
								</Button>
								<Button variant="outline" className="rounded-md text-xs ">
									Штраф (Бан)
									<Ban />
								</Button>
							</div>
						</CardContent>
					</Card>
					<Customers />
				</div>
			</section>
		</>
	)
}
