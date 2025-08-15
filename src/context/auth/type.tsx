import { User } from "@/services/config/type"
import { ReactNode } from "react";

export interface myjwtpayload {
    exp: number
}

export interface AuthProviderProps {
    children: ReactNode
}

export interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}