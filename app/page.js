import Link from "next/link"
import { Logo } from "components/Logo"
import styles from "./styles.module.css"

export default function Main() {
	return (
		<div className="min-h-screen w-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
			<div className="max-w-screen-sm flex flex-col items-center">
				<Link href="/">
					<Logo className="block w-64 mb-12 text-stone-600 dark:text-stone-500" />
				</Link>
				<div className={"grid gap-6 " + styles.text}>
					<Item link="https://github.com/navandstokes">Github</Item>
					<Item link="/c/portraits">Camera</Item>
					<Item link="https://thebox.sherrii.vercel.app/">
						The Box
					</Item>
					<Item link="https://coscove.com/">Coscove</Item>
				</div>
			</div>
		</div>
	)
}

const Item = ({ link, children }) => {
	return (
		<Link
			href={link}
			className="text-7xl text-stone-900 font-extrabold uppercase transition-all text-center"
		>
			{children}
		</Link>
	)
}
