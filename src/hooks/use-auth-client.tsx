import { logIn, signOut, signUp, useSession } from '@/lib/auth-client'
import type { LoginData, SignupData } from '@/validation/auth-schemas'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'

const useAuthClient = () => {
  const { data: session, isPending: isSessionPending } = useSession()

  const navigate = useNavigate()

  const handleLogIn = async ({ email, password }: LoginData) => {
    await logIn.email({
      email: email,
      password: password,
      callbackURL: '/dashboard',
      fetchOptions: {
        onSuccess: () => {
          toast.success('Logged in successfully!')
          navigate({ to: '/' })
        },
        onError: ({ error }) => {
          toast.error(`Error logging in: ${error.message ?? 'Unknown error'}`)
        },
      },
    })
  }

  const handleSignUp = async ({ fullName, email, password }: SignupData) => {
    await signUp.email({
      name: fullName,
      email: email,
      password: password,
      callbackURL: '/dashboard',
      fetchOptions: {
        onSuccess: () => {
          toast.success('Account created successfully!')
          navigate({ to: '/' })
        },
        onError: ({ error }) => {
          toast.error(
            `Error creating account: ${error.message ?? 'Unknown error'}`,
          )
        },
      },
    })
  }

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully')
        },
        onError: ({ error }) => {
          toast.error(`Error signing out: ${error.message ?? 'Unknown error'}`)
        },
      },
    })
  }

  return {
    handleLogIn,
    handleSignUp,
    handleSignOut,
    session,
    isSessionPending,
  }
}

export default useAuthClient
