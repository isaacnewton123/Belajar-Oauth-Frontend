import { apiClient } from "../config";
import { LoginResponse, RegisterResponse } from "./type";

export const googleAuthApi = {
    googleRegister: async(): Promise<RegisterResponse> => {
        const response = await apiClient.get<RegisterResponse>('auth/google')
        return response.data
    },
    googleLogin: async(): Promise<LoginResponse> => {
        const response = await apiClient.get<LoginResponse>('auth/google')
        return response.data
    }
}