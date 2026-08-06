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
import { EmployeeStatus } from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
import { Ban, Pencil } from "lucide-react"
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
						<CardContent className="items-end min-w-80 grid grid-cols-4">
							<Item className="flex flex-col items-center border-muted">
								<Avatar className="size-14">
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
									<ItemTitle>
										Профит:
										<span className="font-bold text-green-700">
											{user?.profit} сом
										</span>
									</ItemTitle>
									<ItemDescription className="text-xs text-muted-foreground">
										{user?.email}
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground">
										{user?.email}
									</ItemDescription>
									<ItemDescription className="text-xs text-muted-foreground">
										{user?.email}
									</ItemDescription>
								</ItemContent>
							</Item>
							<Item>
								<ItemContent>
									<ItemTitle>
										Профит:
										<span className="font-bold text-green-700">
											{user?.profit} сом
										</span>
									</ItemTitle>
									<ItemDescription className="text-xs text-muted-foreground">
										{user?.email}
									</ItemDescription>
								</ItemContent>
							</Item>
							<Item>
								<ItemContent className="flex-row">
									<ItemDescription className="flex flex-col text-xs text-muted-foreground">
										<span>{user?.email}</span>
										<span>{user?.email}</span>
										<span>{user?.email}</span>
									</ItemDescription>
									<div className="flex flex-col">
										<Button variant="outline" size="sm">
											Редактировать
											<Pencil />
										</Button>
										<Button variant="outline" size="sm">
											Штраф (Бан)
											<Ban />
										</Button>
									</div>
								</ItemContent>
							</Item>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="px-1">
							<ul className="flex flex-col gap-1 py-2">
								<li className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Сегодня</span>
									<EmployeeStatus status={user?.working} />
								</li>
								<li className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">Пришел</span>
									<span className="font-medium text-sm">09:02</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">
										Рабочее время
									</span>
									<span className="font-medium text-sm">6ч 23м</span>
								</li>
								<li className="flex items-center justify-between">
									<span className="text-xs text-muted-foreground">
										Опоздание
									</span>
									<span className="font-medium text-sm">2м</span>
								</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			</section>
		</>
	)
}
