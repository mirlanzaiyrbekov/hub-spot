import {
	Badge,
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import {
	ChevronRightIcon,
	ChevronsUp,
	FlagTriangleLeft,
	TrendingUp,
} from "lucide-react"
import { FC } from "react"

export const Revenues: FC = () => {
	return (
		<Card className="shadow-xs rounded-md gap-3.5">
			<CardHeader>
				<CardDescription>Доходы</CardDescription>
				<CardTitle className="text-3xl font-bold tabular-nums">
					18 600 сом
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-green-600">
						<TrendingUp className="size-4" />
						+12%
					</Badge>
				</CardAction>
			</CardHeader>
			<CardContent className="px-2">
				<ul className="grid gap-1.5 text-sm">
					<li className="flex items-center gap-1.5">
						<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
						<div className="w-full flex justify-between">
							<span className="text-muted-foreground">За прошлый месяц:</span>
							<b className=" flex items-center gap-1.5">
								<ChevronsUp className="size-3 text-green-600" />
								20.300 СОМ
							</b>
						</div>
					</li>
					<li className="flex items-center gap-1.5">
						<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
						<div className="w-full flex justify-between">
							<span className="text-muted-foreground">
								За сегодня: ожидаемый доход
							</span>
							<b>3.200 СОМ</b>
						</div>
					</li>
					<li className="flex items-center gap-1.5">
						<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
						<div className="w-full flex justify-between">
							<span className="text-muted-foreground">
								Приблизительно за этот месяц:
							</span>
							<b className="flex items-center gap-1.5">
								<FlagTriangleLeft className="size-2 text-green-600" />
								23.303 СОМ
							</b>
						</div>
					</li>
				</ul>
			</CardContent>
			<CardFooter />
		</Card>
	)
}
