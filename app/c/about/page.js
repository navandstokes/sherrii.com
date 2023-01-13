import api from "api"
import { Img } from "components/Img"

export default async function About() {
	const ux = await api
		.getEntries({
			"sys.id": `69NFnxNl22RSMTuNUYuOTY`,
			include: 5,
		})
		.then((data) => data.items[0])

	const dp = await api.getAsset(`6YUWwVNBcLbjQINRdXFhK2`)

	return (
		<div className="grow flex flex-col lg:flex-row px-4 justify-center lg:items-center">
			<div className="mt-6 lg:mt-0 lg:max-w-5xl px-4 lg:pr-6">
				<div className="flex justify-between items-center mb-4">
					<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6 opacity-40">
						Current Location:
					</span>
					<span className="inline-block text-right">
						{ux.fields.items[0].fields.value}
					</span>
				</div>
				<div className="flex justify-between items-center mb-4">
					<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6 opacity-40">
						Always:
					</span>
					<span className="inline-block text-right">
						{ux.fields.items[1].fields.value}
					</span>
				</div>
				<div className="flex justify-between items-center mb-4">
					<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6 opacity-40">
						Say hello:
					</span>
					<span className="inline-block text-right">
						<a href={"mailto:" + ux.fields.items[2].fields.value}>
							{ux.fields.items[2].fields.value}
						</a>
					</span>
				</div>
			</div>
			<div className="w-36 h-36">
				<Img ratio={1} src={dp.fields.file.url} sizes="8rem" />
			</div>
		</div>
	)
}
