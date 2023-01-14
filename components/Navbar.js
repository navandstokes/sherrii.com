import Link from "next/link"
import { Logo } from "components/Logo"

export const Navbar = (props) => {
	const Items = props.items.map((item, index) => {
		return (
			<Link
				href={`/c/${item.fields.slug}`}
				key={item.fields.slug}
				className="py-4 text-xs tracking-wider uppercase"
			>
				{item.fields.title}
			</Link>
		)
	})
	return (
		<div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400">
			<div className="flex flex-row justify-between px-5 gap-8 md:min-w-md">
				{Items}
			</div>
			<div className="block lg:px-5 my-4 flex justify-center items-center w-1/2 lg:w-36 shrink-0">
				<Link href="/" className="block w-full">
					<Logo />
				</Link>
			</div>
		</div>
	)
}
