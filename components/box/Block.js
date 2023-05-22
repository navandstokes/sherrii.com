import cn from "classnames"
import { Renderer } from "components/box/Renderer"
import { Gallery } from "components/box/Gallery"

export const Block = ({ images, slug, title, subtitle, text }) => {
	const hasImages = images?.length > 0
	return (
		<div
			className={cn("pb-6", {
				"bg-stone-100 rounded-xl px-6 py-5 md:basis-1/4 grow inline-block md:my-4":
					!hasImages,
				"md:grid md:grid-cols-5 md:items-start gap-6 lg:gap-10 w-full":
					hasImages,
			})}
			id={slug}
		>
			<div className="col-span-2">
				<p className="uppercase font-medium text-xs opacity-60 tracking-wider">
					{title}
				</p>
				{subtitle && (
					<h3 className="font-bold text-2xl mb-3 text-zinc-700">
						{subtitle}
					</h3>
				)}
				{text && <Renderer content={text} />}
			</div>
			{images?.length > 0 && (
				<Gallery
					images={images}
					className="pt-6 md:pt-16 md:pl-20 col-span-3"
				/>
			)}
		</div>
	)
}
