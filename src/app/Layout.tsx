import { ThemeProvider } from "@/app/providers"
import { SidebarInset, SidebarProvider, TooltipProvider } from "@/shared"
import { AppBar, AppSidebar } from "@/widgets"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<TooltipProvider>
					<AppSidebar />
					<SidebarInset className="bg-sidebar p-2">
						<main className="rounded-lg shadow-sm border bg-background min-h-screen h-full">
							<AppBar />
							<div className="mx-auto w-full max-w-360 px-2 py-4">
								<Outlet />
							</div>
						</main>
					</SidebarInset>
				</TooltipProvider>
			</SidebarProvider>
		</ThemeProvider>
	)
}
