import { User } from "@/app/services/config/type";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import type { AuthProviderProps, myjwtpayload } from "./type";
import { AuthContext } from "./useAuthContext";


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        const saveUserJSON = localStorage.getItem('user')

        if (token && saveUserJSON) {
            try {
                const isExpired = jwtDecode<myjwtpayload>(token).exp * 1000 < Date.now();

                if (isExpired) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    setUser(null)
                } else {
                    const savedUser: User = JSON.parse(saveUserJSON)
                    setUser(savedUser)
                }
            } catch (error) {
                console.error("Gagal mem-parse data, membersihkan storage.", error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
            } finally {
                setLoading(false)
            }
        }
    }, [])

    const value = {
        user,
        setUser,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}