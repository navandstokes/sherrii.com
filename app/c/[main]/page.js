import api from "api"
import { Grid } from "components/Grid"

export async function generateStaticParams() {
	const items = await api
		.getEntries({
			content_type: `list`,
			include: `4`,
			"fields.slug[nin]": `about`,
		})
		.then((data) => data.items)

	return items.map((item) => ({ main: item.fields.slug }))
}

export default async function Main({ params: { main } }) {
	const items = await api
		.getEntries({
			content_type: `list`,
			"fields.slug": `${main}`,
			include: `5`,
		})
		.then((data) => data.items[0])

	return <Grid items={items.fields.items} />
}
