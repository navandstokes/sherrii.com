import { createClient } from 'contentful'

const api = createClient({
	space: process.env.CONTENTFUL_SPACE,
	accessToken: process.env.CONTENTFUL_TOKEN
})

export default api