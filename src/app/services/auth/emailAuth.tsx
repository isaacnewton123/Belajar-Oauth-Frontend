import { apiClient } from "../config"
import { FormLogin, FormRegister, LoginResponse, RegisterResponse } from "./type"

export const emailAuthApi = {
    emailRegister: async(userData: FormRegister): Promise<RegisterResponse> => {
        const response = await apiClient.post<RegisterResponse>('auth/register', userData)
        return response.data
    },
    emailLogin: async(userData: FormLogin): Promise<LoginResponse> => {
        const response = await apiClient.post<LoginResponse>('auth/login', userData)
        return response.data
    }
}