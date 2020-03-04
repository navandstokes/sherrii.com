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
		<div className="flex-l justify-between">
			<div className="flex flex-column flex-row justify-between ph2 ph5-l mw6-ns" style={{flexGrow: '1'}}>
				{Items}
			</div>
			<div className="dn db-l ph5-l flex justify-center items-center w5">
				<Link href="/" passHref>
					<img className="w-100 h-100 pointer" style={{objectFit: 'contain'}} src="/horzLogo.png" />
				</Link>				
			</div>
		</div>
	)
}