import React from 'react'
import api from '../api'

export const Grid = props => {
	const Items = props.items.fields.items.map((item) => {
		return (
			<div className="w-25"
				style={{
					height: '25vw',
					backgroundImage: 'url(' + item.fields.images[0].fields.file.url + ')',
					backgroundSize: 'cover'
				}}
				key={item.fields.title}
			>
				<p>{item.fields.title}</p>
				<p className="i">-view-</p>
			</div>
		)
	})
	return (
		<div className="w-100 flex flex-row flex-wrap">
			{Items}
		</div>
	)
}