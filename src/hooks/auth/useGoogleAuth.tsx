import { googleUrl } from "@/services/auth/googleAuth"
import { useSearchParams, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export const useGoogleAuth = () => {
    const route = useRouter()
    const searchParams = useSearchParams()

    const directUrl = () => {
        window.location.href = googleUrl
    }

    const oauthCallback = () => {
        const token = searchParams.get('token')
        if (token) {
            try {
                route.push('/dashboard')
            } catch (error) {
                console.error('oauth error', error)
                toast.error('oauth callback error')
                route.push('/login?error=callback_failed')
            }
        } else {
            toast.error('No Token Found')
            route.push('/login?error=no_token')
        }
    }

    return {
        directUrl,
        oauthCallback
    }
}