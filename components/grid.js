import Link from 'next/link'

export const Grid = props => {
	const Items = props.items.fields.items.map((item) => {
		return (
			<div className="w-100 w-50-m w-25-l overflow-hidden" key={item.fields.title}>
			<style jsx>{`
				img {
					transition: all 0.3s ease;
					z-index: -1;
				}
				a:hover img {
					transform: scale(1.2) rotate(0deg);
					opacity: 0.5;
				}
				a div {
					opacity: 0;
					transition: all 0.3s ease;
					transition-delay: 0.1s;
				}
				a:hover div {
					opacity: 0.75;
				}
			`}</style>
				<Link href={'page?slug=' + item.fields.slug}
					as={'/p/'+ item.fields.slug}
					passHref>
					<a className="db pointer relative">
						<img className="db" src={item.fields.images[0].fields.file.url + '?fit=fill&w=480&h=480'} alt={item.fields.images[0].fields.title} />
						<div className="absolute top-0 left-0 w-100 h-100 flex flex-column justify-center content-center white">
							<p className="tc ma0">{item.fields.title}</p>
							<p className="i tc ma0">-view-</p>
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