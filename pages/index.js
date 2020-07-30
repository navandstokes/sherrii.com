import Head from 'next/head'
import api from 'api'
import { Grid } from 'components/grid'

function Main({ items, error }) {
	return (
		<>
			<Head>
				<title>SHERRI CUI - {items.fields.title}</title>
			</Head>
			<Grid items={items} />
		</>
	)
}

export async function getStaticProps() {
	let items = {}

	await api.getEntries({
		content_type: `list`,
		'fields.slug': `portraits`,
		include: `5`
	}).then(data => {
		items = data.items[0]
	})

	return {
		props: {items}
	}
}

export default Main