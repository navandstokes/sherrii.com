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

export async function getStaticProps({ params: { main }}) {
	let items = {}

	await api.getEntries({
		content_type: `list`,
		'fields.slug': `${main}`,
		include: `5`
	}).then(data => {
		items = data.items[0]
	})

	return {
		props: {items}
	}
}

export async function getStaticPaths() {
	let paths

	await api.getEntries({
		content_type: `list`,
		include: `4`
	}).then(data => {
		paths = data.items.map(item => ({ params: { main: item.fields.slug }}))
	})

	return { paths, fallback: false }
}

export default Main