import { FormLogin, FormRegister } from "@/app/services/auth/type"
import { useAuthContext } from "@/app/context/auth/useAuthContext"
import { emailAuthApi } from "@/app/services/auth/emailAuth"
import { toast } from "react-toastify/unstyled"
import { useRouter } from "next/router"

export const useAuth = () => {

    const {setLoading , setUser} = useAuthContext()

    const router = useRouter()

    const useEmailRegister = async (userData: FormRegister) => {
        setLoading(true)
        try {
            await emailAuthApi.emailRegister(userData)
            toast.success('register successfull please login')
            router.push('/login')
        } catch (error) {
            console.error('cannot register', error)
            toast.error('email already use')
        } finally {
            setLoading(false)
        }
    }

    const useEmailLogin = async(userData: FormLogin) => {
        setLoading(true)
        try{
            const response = await emailAuthApi.emailLogin(userData)
            if(response && response.token && response.user) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('user', JSON.stringify(response.user))

                setUser(response.user)
                toast.success('login success')
                router.push('/dashboard')
            } else {
                toast.error('token experied')
            }
        } catch (error) {
            console.error('cannot login', error)
            toast.error('email/password not valid')
        } finally {
            setLoading(false)
        }
    }

    return {
        useEmailLogin,
        useEmailRegister
    }
}