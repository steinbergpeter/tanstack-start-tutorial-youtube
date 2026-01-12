import { z } from 'zod'

export const signupDataSchema = z.object({
  fullName: z.string().min(5, 'Name must be at least 5 characters long'),
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export type SignupDataSchema = z.infer<typeof signupDataSchema>

export const signupDefaultValues: SignupDataSchema = {
  fullName: '',
  email: '',
  password: '',
}

export const loginDataSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export type LoginDataSchema = z.infer<typeof loginDataSchema>

export const loginDefaultValues: LoginDataSchema = {
  email: '',
  password: '',
}
