import { apiClient } from "../config"
import { emailAuthApi } from "./emailAuth"
import { GetMe, Logout } from "./type"

export const getMe = async():Promise<GetMe> => {
    const response = await apiClient.get<GetMe>('/auth/me')
    return response.data
}

export const logout = async():Promise<Logout> => {
    const response = await apiClient.get<Logout>('auth/logout')
    return response.data
}

export const emailRegister = emailAuthApi.emailRegister
export const emailLogin = emailAuthApi.emailLogin