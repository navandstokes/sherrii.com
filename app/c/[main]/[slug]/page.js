import api from "api"
import { Grid } from "~/components/Grid"
import { Slide } from "~/components/Slide"

export async function generateStaticParams() {
	const items = await api
		.getEntries({
			content_type: `gallery`,
			include: `1`,
		})
		.then((data) => data.items)

	return items.map((item) => ({ main: "s", slug: item.fields.slug }))
}

export default async function Page({ params: { slug } }) {
	const gallery = await api
		.getEntries({
			content_type: `gallery`,
			"fields.slug": `${slug}`,
			include: `5`,
		})
		.then((data) => data.items[0])

	const items = await api
		.getEntries({
			content_type: `list`,
			"fields.title": `${gallery?.fields.category}`,
			include: `5`,
		})
		.then((data) => data.items[0])

	return (
		<div className="overflow-x-hidden bg-stone-900">
			<Slide items={gallery.fields.images} />
			<Grid items={items.fields.items} />
		</div>
	)
}
