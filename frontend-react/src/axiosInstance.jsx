import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_API,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        if (error.response?.status === 401 && originalRequest && !originalRequest.retry) {
            originalRequest.retry = true
            const refreshToken = localStorage.getItem('refreshToken')

            if (refreshToken) {
                try {
                    const response = await axiosInstance.post('/token/refresh/', {
                        refresh: refreshToken,
                    })
                    localStorage.setItem('accessToken', response.data.access)
                    originalRequest.headers.Authorization = `Bearer ${response.data.access}`
                    return axiosInstance(originalRequest)
                } catch (refreshError) {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    return Promise.reject(refreshError)
                }
            }
        }

        return Promise.reject(error)
    },
)

export default axiosInstance
