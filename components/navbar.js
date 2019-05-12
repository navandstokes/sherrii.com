import Link from 'next/link'

export const Navbar = props => {
	const Items = props.items.map((item) => {
		return (
			<Link href={'main?slug=' + item.fields.slug}
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