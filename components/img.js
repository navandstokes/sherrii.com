"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

export const Img = (props) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		margin: "400px 0px",
	})

	const [loaded, setLoad] = useState(false)

	const ratio = props.ratio ? props.ratio : 9 / 16

	return (
		<div
			ref={ref}
			style={{
				width: props.width ? props.width : "100%",
				position: "relative",
				paddingBottom: `${ratio * 100}%`,
			}}
		>
			<picture
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "block",
					width: "100%",
					height: "100%",
					fontSize: "0",
				}}
				data-alt={props.alt}
				data-iesrc={props.src}
				onLoad={() => {
					setLoad(true)
				}}
			>
				<style jsx>{`
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						display: block;
						vertical-align: top;
						opacity: ${loaded ? 1 : 0};
						transition: all 0.5s linear;
					}
				`}</style>
				<source
					type="image/webp"
					srcSet={`
						${props.src}?w=200&fm=webp 200w,
						${props.src}?w=400&fm=webp 400w,
						${props.src}?w=800&fm=webp 800w,
						${props.src}?w=1200&fm=webp 1200w,
						${props.src}?w=1600&fm=webp 1600w,
						${props.src}?w=2000&fm=webp 2000w
					`}
					sizes={props.sizes ? props.sizes : "100vw"}
				/>
				<source
					type="image/jpeg"
					srcSet={`
						${props.src}?w=200&fm=jpg 200w,
						${props.src}?w=400&fm=jpg 400w,
						${props.src}?w=800&fm=jpg 800w,
						${props.src}?w=1200&fm=jpg 1200w,
						${props.src}?w=1600&fm=jpg 1600w,
						${props.src}?w=2000&fm=jpg 2000w
					`}
					sizes={props.sizes ? props.sizes : "100vw"}
				/>
				{inView && (
					<img
						alt={props.alt}
						className={props.className ? props.className : ""}
					/>
				)}
				<noscript>
					<img src={props.src} alt={props.alt} />
				</noscript>
			</picture>
		</div>
	)
}

export const Picture = (props) => {
	return (
		<picture>
			{props.mobileSrc && (
				<>
					<source
						media="(max-width: 30em)"
						type="image/webp"
						srcSet={`
						${props.mobileSrc}?w=200&fm=webp 200w,
						${props.mobileSrc}?w=400&fm=webp 400w,
						${props.mobileSrc}?w=800&fm=webp 800w,
					`}
					/>
					<source
						media="(max-width: 30em)"
						type="image/jpeg"
						srcSet={`
						${props.mobileSrc}?w=200&fm=jpg 200w,
						${props.mobileSrc}?w=400&fm=jpg 400w,
						${props.mobileSrc}?w=800&fm=jpg 800w,
					`}
					/>
				</>
			)}
			<source
				type="image/webp"
				srcSet={`
					${props.src}?w=200&fm=webp 200w,
					${props.src}?w=400&fm=webp 400w,
					${props.src}?w=800&fm=webp 800w,
					${props.src}?w=1200&fm=webp 1200w,
					${props.src}?w=1600&fm=webp 1600w,
					${props.src}?w=2000&fm=webp 2000w
				`}
			/>
			<source
				type="image/jpeg"
				srcSet={`
					${props.src}?w=200&fm=jpg 200w,
					${props.src}?w=400&fm=jpg 400w,
					${props.src}?w=800&fm=jpg 800w,
					${props.src}?w=1200&fm=jpg 1200w,
					${props.src}?w=1600&fm=jpg 1600w,
					${props.src}?w=2000&fm=jpg 2000w
				`}
			/>
			<img
				alt={props.alt}
				className={props.className ? props.className : ""}
				style={props.style ? props.style : ""}
			/>
			<noscript>
				<img src={props.src} alt={props.alt} />
			</noscript>
		</picture>
	)
}
