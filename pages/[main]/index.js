import Head from 'next/head'
import api from 'api'
import { Grid } from 'components/grid'
import { Navbar } from 'components/navbar'

const Main = ({ items, menu }) => {
	return (
		<>
			<Head>
				<title>SHERRI CUI - {items.fields.title}</title>
			</Head>
			<Navbar items={menu} />
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

	const menu = await api.getEntries({
	  content_type: `list`,
	  order: 'fields.title'
	}).then(data => {
	  return data.items
	})

	return {
		props: {items, menu}
	}
}

export async function getStaticPaths() {
	let paths

	await api.getEntries({
		content_type: `list`,
		include: `4`,
		'fields.slug[nin]': `about`
	}).then(data => {
		paths = data.items.map(item => ({ params: { main: item.fields.slug }}))
	})

	return { paths, fallback: false }
}

export default Main