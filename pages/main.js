import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import api from '../api'
import { Grid } from '../components/grid'
import { Img } from '../components/img'

class Main extends React.Component {
	static async getInitialProps({ query: { slug }, res}) {
		let items = {}
		let dp = ''
		await api.getEntries({
			content_type: `list`,
			'fields.slug': `${slug}`,
			include: `5`
		}).then(data => {
			items = data.items[0]
		})

		await api.getAsset(`6YUWwVNBcLbjQINRdXFhK2`).then(asset => {
			dp = asset
		})

		if (items) {
			return { items, dp }
		}

		if (res) {
			res.statusCode = 404
		}

		return { error: true }
	}

	render () {
		const { items, dp } = this.props

		return (
			<div>
				<Head>
					<title>SHERRI CUI - {items.fields.title}</title>
				</Head>
				{ this.props.router.query.slug == 'about' ? 
				<div className="vh-75-l flex-l mh3 justify-center items-center">
					<div className="mt5 mt0-l w-40-l ph3 pr4-l">
						<div className="flex justify-between mb3">
							<span className="b ttu tracked f7 dib mr5">Current Location:</span>
							<span className="dib tr">{items.fields.items[0].fields.value}</span>
						</div>
						<div className="flex justify-between mb3">
							<span className="b ttu tracked f7 dib mr5">Always:</span>
							<span className="dib tr">{items.fields.items[1].fields.value}</span>
						</div>
						<div className="flex justify-between mb3">
							<span className="b ttu tracked f7 dib mr5">Say hello:</span>
							<span className="dib tr"><a href={'mailto:' + items.fields.items[2].fields.value}>{items.fields.items[2].fields.value}</a></span>
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
				:
					<Grid items={items} />
				}
			</div>
		)
	}
}

export default withRouter(Main)