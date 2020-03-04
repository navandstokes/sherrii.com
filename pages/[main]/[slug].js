import { Fragment, useState, useEffect } from 'react'
import api from '../../api'
import Head from 'next/head'
import { Grid } from '../../components/grid'
import { Img } from '../../components/img'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const Page = ({ gallery, items, error }) => {
	if (error) {
		return <div>Page not found.</div>
	}

	const [width, setWidth] = useState({
		elWidth: 0, 
		winWidth: 0, 
		winHeight: 0
	})

	useEffect(() => {
		setWidth(prev => ({
			elWidth: document.getElementById('horizontalViewer').offsetWidth,
			winWidth: window.innerWidth,
			winHeight: window.innerHeight
		}))
	}, [])

	let totalWidth = 0

	const Images = gallery.fields.images.map(item => {
		const ratio = item.fields.file.details.image.height / item.fields.file.details.image.width
		const w = width.winHeight / ratio
		totalWidth += w
		return (
			<div key={item.fields.file.url} style={{width: w}}>
				<Img className="vh-100 db" ratio={ratio} src={item.fields.file.url} />
			</div>
		)
	})

	const duration = totalWidth / width.winHeight * 100
	const offset = width.winWidth - totalWidth

	return (
		<div className="overflow-x-hidden bg-dark-gray">
			<Head>
				<title>SHERRI CUI - {gallery.fields.title}</title>
			</Head>
			{ (width.winWidth > 1000 && totalWidth > width.winWidth) ? 
			<Controller>
				<Scene triggerHook={0} duration={duration + '%'} pin>
					<Timeline>
						<Tween  
							from={{ x: '0px' }}
							to={{ x: '-' + (totalWidth - width.winWidth) + 'px'  }}>
							<div className="flex" style={{width: totalWidth + 'px'}}>
								{Images}
							</div>
						</Tween>
					</Timeline>
				</Scene>
			</Controller>
			:
			<ViewerMobile items={gallery.fields.images} winHeight={width.winHeight} />
			}
			<Grid items={items} />
		</div>
	)
}

Page.getInitialProps = async ({ query: { main, slug }, res }) => {
	let gallery, cat, items 

	await api.getEntries({
		content_type: `gallery`,
		'fields.slug': `${slug}`,
		include: `5`
	}).then(data => {
		gallery = data.items[0]
		cat = data.items[0].fields.category
	})

	await api.getEntries({
		content_type: `list`,
		'fields.title': `${cat}`,
		include: `5`
	}).then(itemsData => {
		items = itemsData.items[0]
	})

	if (gallery) {
		return { gallery, items }
	}

	if (res) {
		res.statusCode = 404
	}

	return { error: true }
}

export default Page

const ViewerMobile = props => {
	const Images = props.items.map(item => {
		const ratio = item.fields.file.details.image.height / item.fields.file.details.image.width
		return (
			<Img className="vh-100-ns w-100 w-auto-ns db" ratio={ratio} src={item.fields.file.url} key={item.fields.file.url} />
		)
	})

	return (
		<div className="vh-100-ns w-auto-ns flex flex-column" id="horizontalViewer">
			{Images}
		</div>
	)
}