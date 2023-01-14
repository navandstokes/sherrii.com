import cn from "classnames"
import Link from "next/link"
import { Logo } from "components/Logo"
import styles from "./styles.module.css"

export default function Main() {
	return (
		<div className="min-h-screen w-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-500 flex items-center justify-center">
			<div className="max-w-screen-sm flex flex-col items-center">
				<Link href="/">
					<Logo className="block w-48 lg:w-64 mb-12" />
				</Link>
				<div className={cn("grid gap-4 lg:gap-6", styles.text)}>
					<Item link="https://github.com/navandstokes">Github</Item>
					<Item link="/c/portraits">Camera</Item>
					<Item link="/the-box">The Box</Item>
					<Item link="https://coscove.com/">Coscove</Item>
				</div>
				<div className="mt-20 flex items-center gap-6">
					<a href="https://twitter.com/navandstokes">
						<svg
							viewBox="0 0 20 20"
							aria-hidden="true"
							class="h-5 w-5 fill-current"
						>
							<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84" />
						</svg>
					</a>
					<a href="https://github.com/navandstokes">
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="h-6 w-6 fill-current"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

const Item = ({ link, children }) => {
	return (
		<Link
			href={link}
			className="text-5xl lg:text-7xl text-stone-900 font-black uppercase transition-all text-center"
		>
			{children}
		</Link>
	)
}
