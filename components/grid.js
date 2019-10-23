import Link from 'next/link'
import { Img } from '../components/img'

export const Grid = props => {
	const Items = props.items.fields.items.map((item) => {
		return (
			<div className="w-100 w-50-m w-25-l overflow-hidden" key={item.fields.title}>
			<style jsx>{`
				span {
					transition: all 0.3s ease;
					opacity: 0;
				}
				a:hover span {
					transform: scale(1.2) rotate(0deg);
					opacity: 0.5;
				}
				a div {
					opacity: 0;
					transition: all 0.1s ease;
					transition-delay: 0s;
				}
				a:hover div {
					opacity: 1;
					transition-duration: 0.3s;
					transition-delay: 0.1s;
				}
			`}</style>
				<Link href={'page?slug=' + item.fields.slug}
					as={'/p/'+ item.fields.slug}
					passHref>
					<a className="db pointer relative">
						<Img ratio={1} className="db" src={item.fields.images[0].fields.file.url} alt={item.fields.images[0].fields.title} />
						<span className="db absolute top-0 left-0 w-100 h-100 bg-black"></span>
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
		<div className="w-100 flex flex-row flex-wrap bg-dark-gray">
			{Items}
		</div>
	)
}