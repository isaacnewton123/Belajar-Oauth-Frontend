'use client';

import { LoginForm } from "@/components/login-form"
import { useRouter, useSearchParams } from "next/navigation"


function LoginPage() {

  const route = useRouter()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')
  const user = searchParams.get('user')

  // If user is already logged in, redirect to dashboard
  if (token && user) {
    route.push('/dashboard')
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
      </div>
    </div>

  )
}

export default LoginPage