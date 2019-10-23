import React from 'react'
import api from '../api'
import Head from 'next/head'
import { Grid } from '../components/grid'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

export default class Page extends React.Component {
	constructor() {
		super()
		this.state = {
			elWidth: 0,
			width: 0,
			winHeight: 0
		}
	}
	static async getInitialProps ({query: {slug}, res}) {
		let gallery = {}
		let cat = ''
		let items = {}
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

	componentDidMount() {
		this.setState({
			elWidth: document.getElementById('horizontalViewer').offsetWidth,
			winWidth: window.innerWidth,
			winHeight: window.innerHeight
		})
	}

	render () {
		if (this.props.error) {
			return <div>Page not found.</div>
		}
		const { gallery, items } = this.props

		let totalWidth = 0
		const Images = gallery.fields.images.map(item => {
			totalWidth += item.fields.file.details.image.width * this.state.winHeight / item.fields.file.details.image.height
			return (
				<div key={item.fields.file.url}>
					<img className="vh-100 db" src={item.fields.file.url + '?h=' + this.state.winHeight} />
				</div>
			)
		})

		const duration = totalWidth / this.state.winHeight * 100
		const offset = this.state.winWidth - totalWidth

		return (
			<div className="overflow-x-hidden bg-dark-gray">
				<Head>
					<title>SHERRI CUI - {gallery.fields.title}</title>
				</Head>
				{ (this.state.winWidth > 1000 && totalWidth > this.state.winWidth) ? 
				<Controller>
					<Scene triggerHook={0} duration={duration + '%'} pin>
						<Timeline>
							<Tween  
								from={{ x: '0px' }}
								to={{ x: '-' + (totalWidth - this.state.winWidth) + 'px'  }}>
								<div className="flex" style={{width: totalWidth + 'px'}}>
									{Images}
								</div>
							</Tween>
						</Timeline>
					</Scene>
				</Controller>
				:
				<ViewerMobile items={gallery.fields.images} />
				}
				<Grid items={items} />
			</div>
		)
	}
}

const ViewerMobile = props => {
	const Images = props.items.map(item => {
		return (
			<img className="vh-100-ns w-100 w-auto-ns db" src={item.fields.file.url} key={item.fields.file.url} />
		)
	})

	return (
		<div className="vh-100-ns w-auto-ns flex flex-column" id="horizontalViewer">
			{Images}
		</div>
	)
}