import { Navbar } from "components/box/Navbar"
import Link from "next/link"

export const dynamicParams = false,
	revalidate = 3600

export default async function Layout({ children }) {
	const menu = [
		{ title: "Tech", slug: "tech" },
		{ title: "Living", slug: "living" },
		{ title: "Travel", slug: "travel" },
	]
	return (
		<div className="pb-12 min-h-screen bg-stone-200 text-stone-600 flex flex-col">
			<Navbar items={menu} />
			{children}
			<div className="text-center py-4 uppercase text-sm">
				Made by&nbsp;
				<Link
					href="/"
					className="underline underline-offset-2 decoration-blue-500 decoration-2"
				>
					Sherri
				</Link>
			</div>
		</div>
	)
}
