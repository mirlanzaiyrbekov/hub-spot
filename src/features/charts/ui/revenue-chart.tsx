"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	type ChartConfig,
} from "@/shared"
import { useIsMobile } from "@/shared/hooks/use-mobile"
import { FC } from "react"
export const description = "An interactive area chart"

export const chartData = [
	{ date: "2024-04-01", visitors: 222, revenue: 150 },
	{ date: "2024-04-02", visitors: 97, revenue: 180 },
	{ date: "2024-04-03", visitors: 167, revenue: 120 },
	{ date: "2024-04-04", visitors: 242, revenue: 260 },
	{ date: "2024-04-05", visitors: 373, revenue: 290 },
	{ date: "2024-04-06", visitors: 301, revenue: 340 },
	{ date: "2024-04-07", visitors: 245, revenue: 180 },
	{ date: "2024-04-08", visitors: 409, revenue: 320 },
	{ date: "2024-04-09", visitors: 59, revenue: 110 },
	{ date: "2024-04-10", visitors: 261, revenue: 190 },
	{ date: "2024-04-11", visitors: 327, revenue: 350 },
	{ date: "2024-04-12", visitors: 292, revenue: 210 },
	{ date: "2024-04-13", visitors: 342, revenue: 380 },
	{ date: "2024-04-14", visitors: 137, revenue: 220 },
	{ date: "2024-04-15", visitors: 120, revenue: 170 },
	{ date: "2024-04-16", visitors: 138, revenue: 190 },
	{ date: "2024-04-17", visitors: 446, revenue: 360 },
	{ date: "2024-04-18", visitors: 364, revenue: 410 },
	{ date: "2024-04-19", visitors: 243, revenue: 180 },
	{ date: "2024-04-20", visitors: 89, revenue: 150 },
	{ date: "2024-04-21", visitors: 137, revenue: 200 },
	{ date: "2024-04-22", visitors: 224, revenue: 170 },
	{ date: "2024-04-23", visitors: 138, revenue: 230 },
	{ date: "2024-04-24", visitors: 387, revenue: 290 },
	{ date: "2024-04-25", visitors: 215, revenue: 250 },
	{ date: "2024-04-26", visitors: 75, revenue: 130 },
	{ date: "2024-04-27", visitors: 383, revenue: 420 },
	{ date: "2024-04-28", visitors: 122, revenue: 180 },
	{ date: "2024-04-29", visitors: 315, revenue: 240 },
	{ date: "2024-04-30", visitors: 454, revenue: 380 },
	{ date: "2024-05-01", visitors: 165, revenue: 220 },
	{ date: "2024-05-02", visitors: 293, revenue: 310 },
	{ date: "2024-05-03", visitors: 247, revenue: 190 },
	{ date: "2024-05-04", visitors: 385, revenue: 420 },
	{ date: "2024-05-05", visitors: 481, revenue: 390 },
	{ date: "2024-05-06", visitors: 498, revenue: 520 },
	{ date: "2024-05-07", visitors: 388, revenue: 300 },
	{ date: "2024-05-08", visitors: 149, revenue: 210 },
	{ date: "2024-05-09", visitors: 227, revenue: 180 },
	{ date: "2024-05-10", visitors: 293, revenue: 330 },
	{ date: "2024-05-11", visitors: 335, revenue: 270 },
	{ date: "2024-05-12", visitors: 197, revenue: 240 },
	{ date: "2024-05-13", visitors: 197, revenue: 160 },
	{ date: "2024-05-14", visitors: 448, revenue: 490 },
	{ date: "2024-05-15", visitors: 473, revenue: 380 },
	{ date: "2024-05-16", visitors: 338, revenue: 400 },
	{ date: "2024-05-17", visitors: 499, revenue: 420 },
	{ date: "2024-05-18", visitors: 315, revenue: 350 },
	{ date: "2024-05-19", visitors: 235, revenue: 180 },
	{ date: "2024-05-20", visitors: 177, revenue: 230 },
	{ date: "2024-05-21", visitors: 82, revenue: 140 },
	{ date: "2024-05-22", visitors: 81, revenue: 120 },
	{ date: "2024-05-23", visitors: 252, revenue: 290 },
	{ date: "2024-05-24", visitors: 294, revenue: 220 },
	{ date: "2024-05-25", visitors: 201, revenue: 250 },
	{ date: "2024-05-26", visitors: 213, revenue: 170 },
	{ date: "2024-05-27", visitors: 420, revenue: 460 },
	{ date: "2024-05-28", visitors: 233, revenue: 190 },
	{ date: "2024-05-29", visitors: 78, revenue: 130 },
	{ date: "2024-05-30", visitors: 340, revenue: 280 },
	{ date: "2024-05-31", visitors: 178, revenue: 230 },
	{ date: "2024-06-01", visitors: 178, revenue: 200 },
	{ date: "2024-06-02", visitors: 470, revenue: 410 },
	{ date: "2024-06-03", visitors: 103, revenue: 160 },
	{ date: "2024-06-04", visitors: 439, revenue: 380 },
	{ date: "2024-06-05", visitors: 88, revenue: 140 },
	{ date: "2024-06-06", visitors: 294, revenue: 250 },
	{ date: "2024-06-07", visitors: 323, revenue: 370 },
	{ date: "2024-06-08", visitors: 385, revenue: 320 },
	{ date: "2024-06-09", visitors: 438, revenue: 480 },
	{ date: "2024-06-10", visitors: 155, revenue: 200 },
	{ date: "2024-06-11", visitors: 92, revenue: 150 },
	{ date: "2024-06-12", visitors: 492, revenue: 420 },
	{ date: "2024-06-13", visitors: 81, revenue: 130 },
	{ date: "2024-06-14", visitors: 426, revenue: 380 },
	{ date: "2024-06-15", visitors: 307, revenue: 350 },
	{ date: "2024-06-16", visitors: 371, revenue: 310 },
	{ date: "2024-06-17", visitors: 475, revenue: 520 },
	{ date: "2024-06-18", visitors: 107, revenue: 170 },
	{ date: "2024-06-19", visitors: 341, revenue: 290 },
	{ date: "2024-06-20", visitors: 408, revenue: 450 },
	{ date: "2024-06-21", visitors: 169, revenue: 210 },
	{ date: "2024-06-22", visitors: 317, revenue: 270 },
	{ date: "2024-06-23", visitors: 480, revenue: 530 },
	{ date: "2024-06-24", visitors: 132, revenue: 180 },
	{ date: "2024-06-25", visitors: 141, revenue: 190 },
	{ date: "2024-06-26", visitors: 434, revenue: 380 },
	{ date: "2024-06-27", visitors: 448, revenue: 490 },
	{ date: "2024-06-28", visitors: 149, revenue: 200 },
	{ date: "2024-06-29", visitors: 103, revenue: 160 },
	{ date: "2024-06-30", visitors: 446, revenue: 400 },
]

export const chartConfig = {
	revenue: {
		label: "Прибыль",
		color: "#5c1987",
	},
	visitors: {
		label: "Посещения",
		color: "#a75ec2 ",
	},
} satisfies ChartConfig

export const RevenueChart: FC = () => {
	const isMobile = useIsMobile()
	const [timeRange, setTimeRange] = React.useState("90d")

	React.useEffect(() => {
		if (isMobile) {
			setTimeRange("7d")
		}
	}, [isMobile])

	const filteredData = chartData.filter((item) => {
		const date = new Date(item.date)
		const referenceDate = new Date("2024-06-30")
		let daysToSubtract = 90
		if (timeRange === "30d") {
			daysToSubtract = 30
		} else if (timeRange === "7d") {
			daysToSubtract = 7
		}
		const startDate = new Date(referenceDate)
		startDate.setDate(startDate.getDate() - daysToSubtract)
		return date >= startDate
	})

	return (
		<Card className="rounded-md">
			<CardHeader>
				<CardTitle>Доход на графике</CardTitle>
				<CardAction className="w-full">
					<Select value={timeRange} onValueChange={setTimeRange}>
						<SelectTrigger
							className="rounded-sm flex **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden text-xs"
							size="sm"
							aria-label="Выбрать значение"
						>
							<SelectValue placeholder="Последние 3 месяца" />
						</SelectTrigger>
						<SelectContent className="rounded-md">
							<SelectItem value="90d" className="rounded-lg text-sm">
								Последние 3 месяца
							</SelectItem>
							<SelectItem value="30d" className="rounded-lg text-sm">
								Последние 30 дней
							</SelectItem>
							<SelectItem value="7d" className="rounded-lg text-sm">
								Последние 7 дней
							</SelectItem>
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-32 w-full 3xl:h-60.5"
				>
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-visitors)"
									stopOpacity={1.0}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-visitors)"
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-revenue)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-revenue)"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value)
								return date.toLocaleDateString("ru-RU", {
									month: "short",
									day: "numeric",
								})
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("ru-RU", {
											month: "short",
											day: "numeric",
										})
									}}
									indicator="dot"
								/>
							}
						/>
						<Area
							dataKey="revenue"
							type="natural"
							fill="url(#fillMobile)"
							stroke="var(--color-revenue)"
							stackId="a"
						/>
						<Area
							dataKey="visitors"
							type="natural"
							fill="url(#fillDesktop)"
							stroke="var(--color-visitors)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
