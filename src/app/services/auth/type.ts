import type { User } from "../config/type"

export interface FormRegister{
  name: string,
  email: string,
  password: string
}

export interface FormLogin{ 
    email: string,
    password: string
}

export interface AuthResponse {
    token: string,
    user: User
}

export interface GetMe {
    success: boolean,
    data: User
}

export interface Logout {
    success: boolean,
    message: string
}