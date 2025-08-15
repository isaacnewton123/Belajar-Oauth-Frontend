import axios, { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const seacrParams = useSearchParams()
    const token = seacrParams.get('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

apiClient.interceptors.response.use(
    (response) => {
        return response
    }, (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
        }
        return Promise.reject(error)
    }
)