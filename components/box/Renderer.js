"use client"

import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Img } from "components/Img"

export const Renderer = (props) => {
	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => (
				<span className="font-bold text-zinc-600">{text}</span>
			),
		},
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => (
				<div className="md:w-72">
					<Img
						src={node.data.target.fields.file.url}
						ratio={
							node.data.target.fields.file.details.image.height /
							node.data.target.fields.file.details.image.width
						}
					/>
				</div>
			),
			[INLINES.HYPERLINK]: (node) => (
				<Squiggle href={node.data.uri}>
					{node.content[0].value}
				</Squiggle>
			),
		},
	}
	return (
		<div className="space-y-4">
			{documentToReactComponents(props.content, options)}
		</div>
	)
}

const Squiggle = ({ children, href }) => {
	return (
		<>
			<style jsx>
				{`
					a {
						position: relative;
						z-index: 0;
						display: inline-flex;
						padding-left: 0.15rem;
						padding-bottom: 0.05rem;
						padding-right: 0.15rem;
					}
					a::before {
						content: "";
						width: 100%;
						height: 100%;
						background-image: linear-gradient(
							to top,
							#fed330 30%,
							rgba(0, 0, 0, 0) 45%
						);
						position: absolute;
						left: 0;
						bottom: 0;
						z-index: -1;
						will-change: width;
						transform-origin: left bottom;
						transition: all 0.5s ease;
					}
					a:hover::before {
						width: 80%;
					}
				`}
			</style>
			<a href={href} className="text-zinc-600 font-bold text-sm">
				{children}
			</a>
		</>
	)
}
