'use client';


import { User } from "@/services/config/type";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import type { AuthProviderProps, myjwtpayload } from "./type";
import { AuthContext } from "./useAuthContext";
import Loading from "@/components/loading";
import { useRouter, useSearchParams } from "next/navigation";


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    const route = useRouter()

    const searchParams = useSearchParams()

    useEffect(() => {
        console.log(loading, 'loading state')

    }, [loading])

    useEffect(() => {
        setLoading(true)
        const token = searchParams.get('token')
        const saveUserJSON = searchParams.get('user')

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
                    route.push('/dashboard')
                }
            } catch (error) {
                console.error("failed parse Data, cleared storage", error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
            }
        }
        setLoading(false)
    }, [searchParams, route]);

    if (loading === true) {
        return (
            <Loading />
        )
    } 

    const value = {
        user,
        setUser,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


}