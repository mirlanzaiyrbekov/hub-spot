import { useTheme } from "@/app/hooks"
import { Button } from "@/shared"
import { FC } from "react"

export const ChangeTheme: FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<Button
			className="dark:hover:bg-muted/0 hover:bg-muted/0"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			variant="ghost"
			size="xs"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="10"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="size-4.5"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
				<path d="M12 3l0 18"></path>
				<path d="M12 9l4.65 -4.65"></path>
				<path d="M12 14.3l7.37 -7.37"></path>
				<path d="M12 19.6l8.85 -8.85"></path>
			</svg>
		</Button>
	)
}
