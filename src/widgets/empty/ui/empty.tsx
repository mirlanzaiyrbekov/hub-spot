import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/shared"
import { PackageSearch } from "lucide-react"
import { FC } from "react"

export const EmptyComponent: FC = () => {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia>
					<PackageSearch className="size-10 text-muted-foreground" />
				</EmptyMedia>
				<EmptyTitle>Данные отсуствуют</EmptyTitle>
				<EmptyDescription>Нет данных</EmptyDescription>
			</EmptyHeader>
		</Empty>
	)
}
