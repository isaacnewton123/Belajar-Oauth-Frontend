import { FormLogin, FormRegister } from "@/services/auth/type"
import { useAuthContext } from "@/context/auth/useAuthContext"
import { emailAuthApi } from "@/services/auth/emailAuth"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export const useEmailAuth = () => {

    const {setLoading , setUser} = useAuthContext()

    const router = useRouter()

    const registerEmail = async (userData: FormRegister) => {
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

    const loginEmail = async(userData: FormLogin) => {
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
            toast.error("email or password is wrong")
        } finally {
            setLoading(false)
        }
    }

    return {
        loginEmail,
        registerEmail
    }
}