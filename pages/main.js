import React from 'react'
import api from '../api'
import { Grid } from '../components/grid'

export default class Main extends React.Component {
	static async getInitialProps({ query: { slug }, res}) {
		let items = {}
		await api.getEntries({
			content_type: `list`,
			'fields.title': `${slug}`,
			include: `5`
		}).then(data => {
			items = data.items[0]
		})

		if (items) {
			return { items }
		}

		if (res) {
			res.statusCode = 404
		}

		return { error: true }
	}

	render () {
		const { items } = this.props

		return (
			<div>
				<Head>
					<title>SHERRI CUI - {items.fields.title}</title>
				</Head>
				<Grid items={items} />
			</div>
		)
	}
}