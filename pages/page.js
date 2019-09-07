import React from 'react'
import api from '../api'
import Head from 'next/head'
import { Viewer } from '../components/viewer'
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
		const duration = this.state.elWidth / this.state.winHeight * 100

		return (
			<div className="overflow-x-hidden">
				<Head>
					<title>SHERRI CUI - {gallery.fields.title}</title>
				</Head>
				<Controller>
					<Scene triggerHook={0} duration={duration + '%'} pin>
						<Timeline>
							<Tween  
								from={{ x: '0px' }}
								to={{ x: '-' + this.state.elWidth + 'px'  }}>
								<div>
									<Viewer items={gallery.fields.images} />
								</div>
							</Tween>
						</Timeline>
					</Scene>
				</Controller>
				<Grid items={items} />
			</div>
		)
	}
}