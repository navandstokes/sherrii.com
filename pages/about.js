import Head from 'next/head'
import api from '../api'
import { Img } from '../components/img'

function About({ ux, dp }) {
	return (
		<>
			<Head>
				<title>SHERRI CUI - About</title>
			</Head>
			<div className="vh-75-l flex-l ph3 justify-center items-center">
				<div className="mt5 mt0-l w-40-l ph3 pr4-l">
					<div className="flex justify-between mb3">
						<span className="b ttu tracked f7 dib mr5">Current Location:</span>
						<span className="dib tr">{ux.fields.items[0].fields.value}</span>
					</div>
					<div className="flex justify-between mb3">
						<span className="b ttu tracked f7 dib mr5">Always:</span>
						<span className="dib tr">{ux.fields.items[1].fields.value}</span>
					</div>
					<div className="flex justify-between mb3">
						<span className="b ttu tracked f7 dib mr5">Say hello:</span>
						<span className="dib tr"><a href={'mailto:' + ux.fields.items[2].fields.value}>{ux.fields.items[2].fields.value}</a></span>
					</div>
				</div>
				<div className="mt5 mt0-l w-30-l flex flex-column flex-row-l justify-center items-center">
					<div style={{width: '8rem', height: '8rem'}}>
						<Img ratio={1} src={dp.fields.file.url} sizes="8rem" />
					</div>
					<div className="ma3" style={{width: '3rem'}}>
						<img className="w-100 h-100" style={{objectFit: 'contain'}} src="/vertLogo.png" />
					</div>
				</div>
			</div>
		</>
		)
}

export async function getStaticProps(context) {
	let ux, dp = ''

	await api.getEntries({
		'sys.id': `69NFnxNl22RSMTuNUYuOTY`,
		include: 5
	}).then(data => {
		ux = data.items[0]
	})

	await api.getAsset(`6YUWwVNBcLbjQINRdXFhK2`).then(asset => {
		dp = asset
	})

	return {
		props: {ux, dp}
	}
}

export default About