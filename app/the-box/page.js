import api from "apiTheBox"
import { Section } from "components/box/Section"
import { Navbar } from "components/box/Navbar"
import { Picture } from "components/Img"

export default async function Home() {
	const page = await api
		.getEntries({
			"sys.id": `55s4UuuH3SkXmctxBha6o0`,
			include: `8`,
		})
		.then((data) => data.items[0])

	return (
		<>
			{page?.fields?.banner && (
				<div className="flex justify-center items-center">
					<div className="md:w-2/3 md:h-2/5 p-6">
						<Picture
							src={page.fields.banner.fields.file.url}
							className="rounded-xl overflow-hidden"
						/>
					</div>
				</div>
			)}
			<div className="min-h-screen p-6 md:p-12 rounded-xl max-w-screen-lg mx-auto bg-white">
				{page?.fields?.sections?.length > 0 &&
					page.fields.sections.map((item, index) => {
						return (
							<Section
								{...item.fields}
								key={item.sys.id}
								className={index == 0 ? "mb-12" : "my-12"}
							/>
						)
					})}
			</div>
		</>
	)
}
