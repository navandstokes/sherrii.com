import Head from 'next/head'
import api from 'api'
import { Grid } from 'components/grid'

const Main = ({ items }) => {
	return (
		<>
			<Head>
				<title>SHERRI CUI - {items.fields.title}</title>
			</Head>
			<Grid items={items} />
		</>
	)
}

export async function getStaticProps(context) {
	let items = {}

	await api.getEntries({
		content_type: `list`,
		'fields.slug': `${main}`,
		include: `5`
	}).then(data => {
		items = data.items[0]
	})

	return {
		props: {items}, 
	}
}

export default Main