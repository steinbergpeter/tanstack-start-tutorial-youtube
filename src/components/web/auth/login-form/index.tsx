import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FieldDescription, FieldGroup } from '@/components/ui/field'
import type { FormProps } from '@/components/web/auth/form-types'
import useAuthClient from '@/hooks/use-auth-client'
import { cn } from '@/lib/utils'
import { loginDataSchema, loginDefaultValues } from '@/validation/auth-schemas'
import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import type { FormEvent } from 'react'
import FormField from '../form-field'
import { LoginFormInputs } from './login-form-inputs'

export function LoginForm({ className, ...props }: FormProps) {
  const { handleLogIn } = useAuthClient()

  const form = useForm({
    defaultValues: loginDefaultValues,
    validators: {
      onSubmit: loginDataSchema,
      onBlur: loginDataSchema,
    },
    onSubmit: ({ value }) => handleLogIn(value),
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.handleSubmit()
  }

  return (
    <Card className={cn(className, 'max-w-md w-full')} {...props}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your information below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            {LoginFormInputs.map(({ id, label, type, placeholder }) => (
              <FormField
                key={id}
                form={form}
                fieldName={id}
                label={label}
                placeholder={placeholder}
                type={type}
              />
            ))}
          </FieldGroup>
          <FieldGroup>
            <Button type="submit" variant="secondary">
              Login
            </Button>
            <FieldDescription className="text-center">
              Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
