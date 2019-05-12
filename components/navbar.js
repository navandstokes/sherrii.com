import Link from 'next/link'

export const Navbar = props => {
	const Items = props.items.map((item) => {
		return (
			<Link href={'/' + item.fields.slug} >
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