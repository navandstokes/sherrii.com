import Link from "next/link";
import { Img } from "components/img";

export const Grid = (props) => {
	const Items = props.items.fields.items.map((item) => {
		return (
			<div
				className="w-full md:w-1/2 lg:w-1/4 overflow-hidden"
				key={item.fields.title}
			>
				<style jsx>{`
					span {
						transition: all 0.3s ease;
						opacity: 0;
					}
					a:hover span {
						transform: scale(1.2) rotate(0deg);
						opacity: 0.6;
					}
					a div {
						opacity: 0;
						transition: all 0.1s ease;
						transition-delay: 0s;
					}
					a:hover div {
						opacity: 1;
						transition-duration: 0.3s;
						transition-delay: 0.1s;
					}
				`}</style>
				<Link
					href={{
						pathname: "/[main]/[slug]",
						query: { slug: item.fields.slug },
					}}
					as={"/p/" + item.fields.slug}
					passHref
				>
					<a className="block cursor-pointer relative">
						<Img
							ratio={1}
							sizes="(min-width: 60em) 25vw, (min-width: 30em) 50vw, 100vw"
							className="block"
							src={item.fields.images[0].fields.file.url}
							alt={item.fields.images[0].fields.title}
						/>
						<span className="block absolute top-0 left-0 w-full h-full bg-black"></span>
						<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
							<p className="text-center m-0">
								{item.fields.title}
							</p>
							<p className="italic text-center m-0">-view-</p>
						</div>
					</a>
				</Link>
			</div>
		);
	});
	return (
		<div className="w-full flex flex-row flex-wrap bg-stone-800">
			{Items}
		</div>
	);
};
