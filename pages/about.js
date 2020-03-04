import { Fragment } from 'react'
import Head from 'next/head'
import api from '../api'
import { Img } from '../components/img'

const About = ({ ux, dp, error }) => {
	if (error) {
		return <div>Page not found.</div>
	}

	return (
		<Fragment>
			<Head>
				<title>SHERRI CUI - About</title>
			</Head>
			<div className="vh-75-l flex-l mh3 justify-center items-center">
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
					<div className="mh3" style={{width: '3rem'}}>
						<img className="w-100 h-100" style={{objectFit: 'contain'}} src="../static/vertLogo.png" />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

About.getInitialProps = async ({ res }) => {
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

	if (ux && dp) {
		return { ux, dp }
	}

	if (res) {
		res.statusCode = 404
	}

	return { error: true}
}

export default About