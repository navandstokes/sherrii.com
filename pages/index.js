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
					background-image: -webkit-linear-gradient(
						135deg,
						#6366f1,
						#a855f7,
						#ec4899
					);
					background-image: -moz-linear-gradient(
						135deg,
						#6366f1,
						#a855f7,
						#ec4899
					);
					background-image: linear-gradient(
						135deg,
						#6366f1,
						#a855f7,
						#ec4899
					);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			`}</style>
			<div className="min-h-screen w-full bg-stone-50 flex items-center justify-center">
				<div className="max-w-screen-sm flex flex-col items-center">
					<Link href="/" passHref>
						<img
							className="w-64 cursor-pointer object-contain mb-12"
							src="/horzLogo.png"
							alt="Sherri Cui logo"
						/>
					</Link>
					<div className="grid gap-6 text">
						<Item link="https://github.com/navandstokes">
							Github
						</Item>
						<Item link="/portraits">Camera</Item>
						<Item link="https://thebox.sherrii.vercel.app/">
							The Box
						</Item>
					</div>
				</div>
			</div>
		</>
	);
}

const Item = ({ link, children }) => {
	return (
		<Link
			href={link}
			className="text-7xl text-stone-900 font-extrabold uppercase transition-all text-center"
		>
			{children}
		</Link>
	);
};

export default Main;
