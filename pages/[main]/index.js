import { Fragment } from 'react'
import Head from 'next/head'
import api from '../../api'
import { Grid } from '../../components/grid'

const Main = ({ items, error }) => {
	if (error) {
		return <div>Page not found.</div>
	}
	return (
		<Fragment>
			<Head>
				<title>SHERRI CUI - {items.fields.title}</title>
			</Head>
			<Grid items={items} />
		</Fragment>
	)
}

Main.getInitialProps = async ({ query: { main }, res }) => {
	let items = {}

	await api.getEntries({
		content_type: `list`,
		'fields.slug': `${main}`,
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

export default Main