import { apiClient } from "../config"
import { AuthResponse, FormLogin, FormRegister } from "./type"

export const emailAuthApi = {
    emailRegister: async(userData: FormRegister): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('auth/register', userData)
        return response.data
    },
    emailLogin: async(userData: FormLogin): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('auth/login', userData)
        return response.data
    }
}