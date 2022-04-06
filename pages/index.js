import Head from "next/head";
import Link from "next/link";

function Main({ items, error }) {
	return (
		<>
			<Head>
				<title>SHERRI CUI</title>
			</Head>
			<style jsx>{`
				.text {
					background: -webkit-linear-gradient(
						#6366f1,
						#a855f7,
						#ec4899
					);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			`}</style>
			<div className="min-h-screen w-full bg-stone-50 flex items-center justify-center">
				<div className="max-w-screen-sm grid gap-6 text">
					<Item link="/">Resume</Item>
					<Item link="/portraits">Photos</Item>
					<Item link="https://thebox.sherrii.vercel.app/">
						The Box
					</Item>
				</div>
			</div>
		</>
	);
}

const Item = ({ link, children }) => {
	return (
		<Link href={link}>
			<a className="text-7xl text-stone-900 font-extrabold uppercase transition-all text-center">
				{children}
			</a>
		</Link>
	);
};

export default Main;
