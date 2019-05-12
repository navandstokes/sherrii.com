export const Viewer = props => {
	const Images = props.items.map(item => {
		//TODO something is fucky with this CSS
		return (
			<div className="dib lh-solid" key={item.fields.title}>
				<img className="vh-100-ns w-100 w-auto-ns" src={item.fields.file.url} />
			</div>
		)
	})

	return (
		<div className="vh-100-ns overflow-y-hidden overflow-x-scroll flex flex-column flex-row-ns">
			{Images}
		</div>
	)
}