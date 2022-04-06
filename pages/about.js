import Head from "next/head";
import api from "../api";
import { Img } from "../components/img";
import { Navbar } from "components/navbar";

function About({ ux, dp, menu }) {
	return (
		<>
			<Head>
				<title>SHERRI CUI - About</title>
			</Head>
			<Navbar items={menu} />
			<div className="min-h-[75vh] flex flex-col lg:flex-row px-4 justify-center lg:items-center">
				<div className="mt-6 lg:mt-0 lg:w-2/5 px-4 lg:pr-6">
					<div className="flex justify-between items-center mb-4">
						<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6">
							Current Location:
						</span>
						<span className="inline-block text-right">
							{ux.fields.items[0].fields.value}
						</span>
					</div>
					<div className="flex justify-between items-center mb-4">
						<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6">
							Always:
						</span>
						<span className="inline-block text-right">
							{ux.fields.items[1].fields.value}
						</span>
					</div>
					<div className="flex justify-between items-center mb-4">
						<span className="text-bold uppercase tracking-wide text-xs inline-block mr-6">
							Say hello:
						</span>
						<span className="inline-block text-right">
							<a
								href={
									"mailto:" + ux.fields.items[2].fields.value
								}
							>
								{ux.fields.items[2].fields.value}
							</a>
						</span>
					</div>
				</div>
				<div className="mt-6 lg:mt-0 lg:w-1/3 flex flex-col lg:flex-row justify-center items-center">
					<div className="w-36 h-36">
						<Img ratio={1} src={dp.fields.file.url} sizes="8rem" />
					</div>
					<div className="m-4 w-12">
						<img
							className="w-full h-full object-contain"
							src="/vertLogo.png"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	let ux,
		dp = "";

	await api
		.getEntries({
			"sys.id": `69NFnxNl22RSMTuNUYuOTY`,
			include: 5,
		})
		.then((data) => {
			ux = data.items[0];
		});

	await api.getAsset(`6YUWwVNBcLbjQINRdXFhK2`).then((asset) => {
		dp = asset;
	});

	const menu = await api
		.getEntries({
			content_type: `list`,
			order: "fields.title",
		})
		.then((data) => {
			return data.items;
		});

	return {
		props: { ux, dp, menu },
	};
}

export default About;
