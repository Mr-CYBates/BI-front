import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    // baseURL: '/dev-api',
    timeout: 10000  // 请求超时时间
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
