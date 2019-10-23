import Link from 'next/link'

export const Navbar = props => {
	const Items = props.items.map((item, index) => {
		const href = item.fields.pages ? '/' + item.fields.slug : 'main?slug=' + item.fields.slug
		return (
			<Link href={href}
				as={'/' + item.fields.slug} 
				key={item.fields.slug + index} >
				<a className="pv3 f7 tracked ttu">{item.fields.title}</a>
			</Link>
		)
	})
	return (
		<div className="flex flex-column flex-row justify-between ph5 mw6-ns">
			{Items}
		</div>
	)
}