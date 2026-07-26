import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/shared"
import { TrendingUp, UserRound } from "lucide-react"
import { FC } from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
const chartData = [
	{ month: "Апрель", visits: 186 },
	{ month: "Май", visits: 305 },
	{ month: "Июнь", visits: 237 },
	{ month: "Июль", visits: 73 },
	{ month: "Август", visits: 209 },
	{ month: "Сентябрь", visits: 214 },
]
const chartConfig = {
	visits: {
		label: "Посещения",
		color: "#5c1987",
	},
} satisfies ChartConfig
export const Customers: FC = () => {
	return (
		<Card className="shadow-xs rounded-md gap-3.5">
			<CardHeader>
				<CardDescription>Клиенты</CardDescription>
				<CardTitle className="text-3xl font-bold tabular-nums">
					<div className="flex items-center gap-1.5">
						15
						<UserRound className="size-5" />
					</div>
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-green-500">
						<TrendingUp className="size-4" />
						+3
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<ChartContainer config={chartConfig} className="h-20 w-full">
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Line
							dataKey="visits"
							type="linear"
							stroke="var(--color-visits)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardFooter>
		</Card>
	)
}
