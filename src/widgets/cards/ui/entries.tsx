import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import {
	Check,
	ChevronRightIcon,
	ClipboardPen,
	Plus,
	TrendingUp,
} from "lucide-react"
import { FC } from "react"

export const Entries: FC = () => {
	return (
		<Card className="shadow-xs rounded-md gap-3.5">
			<CardHeader>
				<CardDescription>Записи</CardDescription>
				<CardTitle className="text-3xl font-bold tabular-nums">
					<div className="flex items-center gap-1.5">
						26
						<ClipboardPen className="size-5" />
					</div>
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-purple-700">
						2 отмены
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">Сегодня:</span>
					<b className="flex items-center gap-0.5">
						<Plus className="size-3 text-green-600" />6
					</b>
				</div>
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">Записей на завтра:</span>
					<b className="flex items-center gap-0.5">
						<Check className="size-3 text-green-600" />
						14
					</b>
				</div>
				<div className="flex items-center gap-1.5">
					<ChevronRightIcon className="mt-0.5 size-2 shrink-0" />
					<span className="text-muted-foreground">
						Всего записей за прошлый месяц:
					</span>
					<b className="flex items-center gap-0.5">
						<TrendingUp className="size-3 text-green-600" />
						78
					</b>
				</div>
			</CardFooter>
		</Card>
	)
}
