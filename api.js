import { createClient } from 'contentful'
	// space: process.env.CONTENTFUL_SPACE,
	// accessToken: process.env.CONTENTFUL_TOKEN

const api = createClient({
	space: `ajwj5ghji4mi`,
	accessToken: `d65Y2v0jGeepihxkJfakT7u9dIo7Hd0TACRP8nv8PGA`
})

export default api