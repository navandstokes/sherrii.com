import React from 'react'
import api from '../api'
import Head from 'next/head'
import { Grid } from '../components/grid'

export default class Page extends React.Component {
	static async getInitialProps ({query: {slug}, res}) {
		let gallery = {}
		let cat = ''
		let items = {}
		await api.getEntries({
			content_type: `gallery`,
			'fields.slug': `${slug}`,
			include: `5`
		}).then(data => {
			gallery = data.items[0]
			cat = data.items[0].fields.category
		})

		await api.getEntries({
			content_type: `list`,
			'fields.title': `${cat}`,
			include: `5`
		}).then(itemsData => {
			items = itemsData.items[0]
		})

		if (gallery) {
			return { gallery, items }
		}

		if (res) {
			res.statusCode = 404
		}

		return { error: true }
	}
	render () {
		if (this.props.error) {
			return <div>Page not found.</div>
		}

		const { gallery, items } = this.props

		return (
			<div>
				<Head>
					<title>SHERRI CUI - {gallery.fields.title}</title>
				</Head>
				<Grid items={items} />
			</div>
		)
	}
}