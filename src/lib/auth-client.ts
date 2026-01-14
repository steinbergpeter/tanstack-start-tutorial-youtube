import { createAuthClient } from 'better-auth/react'
import { DEV_URL } from './constants'

const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: DEV_URL,
})

const useSession = authClient.useSession
const logIn = authClient.signIn
const signUp = authClient.signUp
const signOut = authClient.signOut

export { useSession, logIn, signUp, signOut }
