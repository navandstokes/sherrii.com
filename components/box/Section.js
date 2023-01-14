import cn from "classnames"
import { Block } from "components/box/Block"
import { Renderer } from "components/box/Renderer"

export const Section = ({ title, subtitle, slug, text, items, className }) => {
	return (
		<>
			<div className={className} id={slug}>
				<h2 className="mb-2 uppercase font-bold text-sm tracking-wider text-blue-500">
					{title}
				</h2>
				{subtitle && (
					<p className="text-3xl font-bold mb-4 text-zinc-700">
						{subtitle}
					</p>
				)}
				{text && <Renderer content={text} />}
			</div>
			{items?.length > 0 && (
				<div className="flex flex-wrap gap-6">
					{items.map((item, index) => (
						<Block {...item.fields} key={item.sys.id} />
					))}
				</div>
			)}
		</>
	)
}
