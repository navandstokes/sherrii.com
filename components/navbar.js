import Link from 'next/link'

export const Navbar = props => {
	const Items = props.items.map((item) => {
		const href = item.fields.pages ? '/' + item.fields.slug : 'main?slug=' + item.fields.slug
		return (
			<Link href={href}
				as={'/' + item.fields.slug} 
				key={item.fields.title} >
				<a className="ma3">{item.fields.title}</a>
			</Link>
		)
	})
	return (
		<div className="flex flex-column flex-row-ns justify-between-ns">
			<div className="pa4">
				{Items}
			</div>
		</div>
	)
}