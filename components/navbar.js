import Link from "next/link";

export const Navbar = (props) => {
	const Items = props.items.map((item, index) => {
		const href =
			item.fields.slug == "about"
				? { pathname: "/about" }
				: { pathname: "/[main]", query: { main: item.fields.slug } };
		return (
			<Link
				href={href}
				as={"/" + item.fields.slug}
				key={item.fields.slug + index}
			>
				<a className="py-4 text-xs tracking-wider uppercase">
					{item.fields.title}
				</a>
			</Link>
		);
	});
	return (
		<div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
			<div className="flex flex-row justify-between px-5 gap-8 md:min-w-md">
				{Items}
			</div>
			<div className="block lg:px-5 py-4 flex justify-center items-center w-3/4 lg:w-36 shrink-0">
				<Link href="/" passHref>
					<img
						className="w-full h-full cursor-pointer"
						style={{ objectFit: "contain" }}
						src="/horzLogo.png"
						alt="Sherri Cui logo"
					/>
				</Link>
			</div>
		</div>
	);
};
