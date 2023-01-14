import { createClient } from "contentful"

const api = createClient({
	space: process.env.CONTENTFUL_SPACE_THEBOX,
	accessToken: process.env.CONTENTFUL_TOKEN_THEBOX,
})

export default api
