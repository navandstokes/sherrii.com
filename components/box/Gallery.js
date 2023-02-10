"use client"

import { useState, useCallback } from "react"
import cn from "classnames"
import { Img } from "components/Img"
import { RemoveScroll } from "react-remove-scroll"

export const Gallery = ({ images, className }) => {
	const [item, setItem] = useState(false)
	const removeModal = useCallback(() => {
		setItem(false)
	}, [setItem])

	return (
		<>
			<div className={cn("grid grid-cols-3 gap-2 md:gap-4", className)}>
				{images.map((item, index) => {
					return (
						<GalleryImage
							{...item.fields}
							key={item.sys.id}
							setItem={setItem}
							index={index}
						/>
					)
				})}
			</div>
			{item && (
				<GalleryModalWrapper
					{...images[item - 1].fields}
					removeModal={removeModal}
				/>
			)}
		</>
	)
}

const GalleryImage = ({ setItem, index, title, file }) => {
	const handleClick = useCallback(() => {
		setItem(index + 1)
	}, [index, setItem])

	return (
		<button className="w-full" onClick={handleClick}>
			<Img alt={title} src={file?.url} ratio={1} />
		</button>
	)
}

const GalleryModalWrapper = (props) => {
	return (
		<RemoveScroll>
			<div
				className="overflow-y-scroll overflow-x-hidden fixed top-0 left-0 z-50 w-full h-screen lg:overflow-hidden lg:flex lg:justify-center lg:items-center"
				id="galleryModal"
			>
				<button
					className="hidden md:block absolute top-0 left-0 w-full h-full bg-black/80"
					onClick={props.removeModal}
				/>
				<div className="bg-white flex flex-col md:flex-row w-full h-screen md:w-[935px] md:h-[600px]">
					<div className="md:hidden flex justify-between px-2 py-1">
						<button
							className="mv2 mh3 flex items-center"
							onClick={props.removeModal}
						>
							<svg
								className="w-2 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 477.175 477.175"
							>
								<path
									fill="currentColor"
									d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"
								/>
							</svg>
							<h4 className="uppercase text-xs font-bold tracking-wider">
								Go Back
							</h4>
						</button>
					</div>
					<GalleryInner {...props} />
				</div>
			</div>
		</RemoveScroll>
	)
}

const GalleryInner = (props) => {
	return (
		<>
			<div className="relative w-full md:w-[600px] md:h-[600px]">
				<Img src={props.file?.url} alt={props.description} ratio={1} />
			</div>
			<div className="relative bg-white p-10 md:w-[335px] md:h-[600px]">
				<button
					className="hidden lg:block absolute -top-6 right-0 h-4 w-4 text-white"
					onClick={props.removeModal}
				>
					<svg
						stroke="currentColor"
						fill="none"
						strokeWidth="2"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
						height="1rem"
						width="1rem"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
				<h3 className="font-bold text-xl mb-4">{props.title}</h3>
				<p className="text-lg">{props.description}</p>
			</div>
		</>
	)
}
