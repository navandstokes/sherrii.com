import api from "api"
import { Navbar } from "components/Navbar"

export const dynamicParams = false,
	revalidate = 3600

export default async function Layout({ children }) {
	const menu = await api
		.getEntries({
			content_type: `list`,
			order: "fields.title",
		})
		.then((data) => data.items)
	return (
		<div className="min-h-screen bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400 flex flex-col">
			<Navbar items={menu} />
			{children}
		</div>
	)
}
