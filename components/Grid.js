import Link from "next/link"
import { Img } from "components/Img"

export const Grid = ({ items }) => {
	return (
		<div className="w-full flex flex-row flex-wrap bg-stone-800">
			{items.map((item) => (
				<div
					className="w-full md:w-1/2 lg:w-1/4 overflow-hidden"
					key={item.fields.title}
				>
					<Link
						href={`/c/s/${item.fields.slug}`}
						className="block cursor-pointer relative group"
						passHref
					>
						<Img
							ratio={1}
							sizes="(min-width: 60em) 25vw, (min-width: 30em) 50vw, 100vw"
							className="block"
							src={item.fields.images[0].fields.file.url}
							alt={item.fields.images[0].fields.title}
						/>
						<span className="block absolute top-0 left-0 w-full h-full bg-black transition-all opacity-60 group-hover:opacity-0"></span>
						<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white transition-all opacity-100 group-hover:opacity-0">
							<p className="opacity-80 text-center m-0">
								{item.fields.title}
							</p>
							<p className="opacity-40 italic text-center m-0">
								-view-
							</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	)
}
