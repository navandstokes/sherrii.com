import Link from 'next/link'

export const Grid = props => {
	const Items = props.items.fields.items.map((item) => {
		return (
			<div className="w-100 w-50-m w-25-l" key={item.fields.title}>
				<Link href={'page?slug=' + item.fields.slug}
					as={'/p/'+ item.fields.slug}
					passHref>
					<a>
						<div className="aspect-ratio aspect-ratio--1x1 cover dim pointer"
						style={{
							backgroundImage: 'url(' + item.fields.images[0].fields.file.url + '?w=480)'
						}}>
							<div className="absolute w-100 h-100 flex flex-column justify-center content-center">
								<p className="tc ma0">{item.fields.title}</p>
								<p className="i tc ma0">-view-</p>
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	})
	return (
		<div className="w-100 flex flex-row flex-wrap">
			{Items}
		</div>
	)
}