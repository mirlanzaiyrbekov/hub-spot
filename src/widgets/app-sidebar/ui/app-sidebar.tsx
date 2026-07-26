"use client"

import {
	AudioLines,
	Blocks,
	BookOpen,
	LifeBuoy,
	MonitorCog,
} from "lucide-react"
import * as React from "react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/shared"
import { Link } from "react-router-dom"
import { SidebarMenuType } from "../types/sidebar-menu-component"
import { SidebarMenuComponent } from "./sidebar-menu"

const data: SidebarMenuType = {
	items: [
		{
			title: "Навигация",
			url: "#",
			icon: MonitorCog,
			isActive: true,
			subItems: [
				{
					title: "Главная",
					url: "/",
				},
				{
					title: "Сотрудники",
					url: "/employees",
				},
				{
					title: "Аналитика",
					url: "#",
				},
			],
		},
		{
			title: "Расширения",
			url: "#",
			icon: Blocks,
			isActive: true,
			subItems: [
				{
					title: "Zion Labs Ai",
					url: "#",
					disabled: true,
				},
				{
					title: "Полный пакет поддержки",
					url: "#",
					disabled: true,
				},
				{
					title: "Quantum",
					url: "#",
					disabled: true,
				},
			],
		},
		{
			title: "Документация",
			url: "#",
			icon: BookOpen,
			isActive: true,
			subItems: [
				{
					title: "Частые вопросы",
					url: "#",
				},
				{
					title: "Первый старт",
					url: "#",
				},
				{
					title: "Учебные материалы",
					url: "#",
				},
			],
		},
		{
			title: "Тех.поддержка",
			url: "#",
			icon: LifeBuoy,
			isActive: true,
			subItems: [
				{
					title: "WhatsUp",
					url: "#",
				},
				{
					title: "Telegram",
					url: "#",
					disabled: true,
				},
			],
		},
	],
}

export const AppSidebar: React.FC = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	return (
		<Sidebar collapsible="offcanvas" {...props} className="border-none">
			<SidebarHeader className="py-2.5 pl-4 gap-10">
				<Link to={"/"}>
					<div className="flex items-center gap-2">
						<div className="flex justify-center items-center border border-zinc-400/40 dark:border-zinc-600 w-10 h-10 rounded-md bg-zinc-100/50 dark:bg-zinc-900">
							<AudioLines />
						</div>
						<strong
							className="
								text-xl font-extrabold
								bg-clip-text text-transparent
								bg-linear-to-r
								from-zinc-700
								via-zinc-500
								to-zinc-700

								dark:from-zinc-400
								dark:via-white
								dark:to-zinc-400

								drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]
								dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
							"
						>
							Hub Spot
						</strong>
					</div>
				</Link>
			</SidebarHeader>
			<SidebarContent className="pt-5">
				<SidebarMenuComponent items={data.items} />
			</SidebarContent>
			<SidebarFooter>
				<div className="p-3">
					<span
						className="
								text-[10px] font-extrabold
								bg-clip-text text-transparent
								bg-linear-to-r
								from-zinc-400
								via-zinc-500
								to-zinc-400

								dark:from-zinc-400
								dark:via-white
								dark:to-zinc-400

								drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]
								dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]
							"
					>
						Prefect Founder of &copy; Zion Labs Corp.2026
					</span>
				</div>
			</SidebarFooter>
		</Sidebar>
	)
}
