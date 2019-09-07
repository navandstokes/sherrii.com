export const Viewer = props => {
	const Images = props.items.map(item => {
		return (
			<img className="vh-100-ns w-100 w-auto-ns db" src={item.fields.file.url} key={item.fields.file.url} />
		)
	})

	return (
		<div className="vh-100-ns w-auto-ns flex flex-column flex-row-ns" id="horizontalViewer">
			{Images}
		</div>
	)
}