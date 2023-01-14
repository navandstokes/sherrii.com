import Link from "next/link"

export const Menu = ({ items }) => {
	return items.map((item) => {
		const href = item.slug ? "/#" + item.slug : item.url
		return (
			<Link href={href} key={item.title}>
				<span className="text-sm font-bold uppercase tracking-wide text-white">
					{item.title}
				</span>
			</Link>
		)
	})
}
