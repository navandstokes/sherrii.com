"use client"

import { useState, useEffect } from "react"
import { Img } from "components/Img"
import { Tween, Timeline, ScrollTrigger } from "react-gsap"

export function Slide({ items }) {
	const [width, setWidth] = useState({
		elWidth: 0,
		winWidth: 0,
		winHeight: 0,
	})

	useEffect(() => {
		setWidth((prev) => ({
			elWidth: document.getElementById("horizontalViewer").offsetWidth,
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		}))
	}, [])

	const totalWidth = items.reduce((acc, item) => {
		return (
			acc +
			width.winHeight /
				(item.fields.file.details.image.height /
					item.fields.file.details.image.width)
		)
	}, 0)

	const Images = items.map((item) => {
		const ratio =
			item.fields.file.details.image.height /
			item.fields.file.details.image.width
		const w = width.winHeight / ratio
		return (
			<div key={item.fields.file.url} style={{ width: w }}>
				<Img
					className="vh-full block"
					ratio={ratio}
					src={item.fields.file.url}
					sizes="(min-width: 640px) 25vw, 100vw"
				/>
			</div>
		)
	})

	const duration = (totalWidth / width.winHeight) * 100

	return (
		<>
			{width.winWidth > 1000 && totalWidth > width.winWidth ? (
				<ScrollTrigger
					start="top top"
					end={`${totalWidth}px bottom`}
					scrub={0.5}
					markers
					pin
				>
					<Tween
						from={{ x: "0px" }}
						to={{
							x: "-" + (totalWidth - width.winWidth) + "px",
						}}
					>
						<div
							className="flex"
							style={{ width: totalWidth + "px" }}
						>
							{Images}
						</div>
					</Tween>
				</ScrollTrigger>
			) : (
				<ViewerMobile items={items} winHeight={width.winHeight} />
			)}
		</>
	)
}

function ViewerMobile({ items }) {
	return (
		<div
			className="md:h-screen md:w-auto flex flex-col"
			id="horizontalViewer"
		>
			{items.map((item) => (
				<Img
					className="md:h-screen w-full md:w-auto block"
					ratio={
						item.fields.file.details.image.height /
						item.fields.file.details.image.width
					}
					src={item.fields.file.url}
					key={item.fields.file.url}
				/>
			))}
		</div>
	)
}
