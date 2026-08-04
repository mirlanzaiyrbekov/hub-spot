import { IEmployee } from "@/entities/employees/types/employees.type"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Card,
	CardContent,
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/shared"
import { EmployeeStatus } from "@/widgets"
import { columnData } from "@/widgets/employees/place-holder-data"
import { PlusIcon } from "lucide-react"
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
					<Card className="flex items-center flex-row gap-2 px-2">
						<CardContent className="min-w-80 grid grid-cols-3">
							<Item className="flex items-center">
								<Avatar className="size-14">
									<AvatarImage src={user?.image} alt={user?.firstName} />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<ItemContent>
									<ItemTitle>
										{user?.lastName}
										<b>{user?.firstName}</b>
									</ItemTitle>
									<ItemDescription>{user?.email}</ItemDescription>
								</ItemContent>
							</Item>
							<Item>
								<ItemContent>
									<ItemTitle>
										{user?.lastName}
										<b>{user?.firstName}</b>
									</ItemTitle>
									<ItemDescription>{user?.email}</ItemDescription>
									<ItemDescription>
										{user?.address.city}/{user?.address.street}
									</ItemDescription>
									<ItemDescription>{user?.phone}</ItemDescription>
								</ItemContent>
								<ItemActions>
									<Button size="icon">
										<PlusIcon />
									</Button>
									<Button size="icon">
										<PlusIcon />
									</Button>
								</ItemActions>
							</Item>
						</CardContent>
					</Card>
					<Item variant="outline" className="rounded-sm">
						<ItemContent>
							<ItemTitle>Сводка</ItemTitle>
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
						</ItemContent>
					</Item>
				</div>
			</section>
		</>
	)
}
