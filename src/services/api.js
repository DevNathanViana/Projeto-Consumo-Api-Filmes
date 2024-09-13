import axios from 'axios'

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use(async (config) => {
    const token = 'f7beL75Cd2guFU9LlB2S'

    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api