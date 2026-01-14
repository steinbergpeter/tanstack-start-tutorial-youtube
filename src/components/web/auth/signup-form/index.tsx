import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field'
import FormField from '../form-field'
import useAuthClient from '@/hooks/use-auth-client'
import { cn } from '@/lib/utils'
import {
  signupDataSchema,
  signupDefaultValues,
} from '@/validation/auth-schemas'
import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import type { FormEvent } from 'react'
import type { FormProps } from '../form-types'
import { SignUpFormInputs } from './signup-form-inputs'

export function SignupForm({ className, ...props }: FormProps) {
  const { handleSignUp } = useAuthClient()

  const form = useForm({
    defaultValues: signupDefaultValues,
    validators: {
      onSubmit: signupDataSchema,
    },
    onSubmit: ({ value }) => {
      handleSignUp(value)
      console.log('Signup form submitted with value:', value)
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.handleSubmit()
  }

  // const disabled =
  //   form.store.state.isSubmitting ||
  //   form.store.state.isValidating ||
  //   !form.store.state.isValid

  return (
    <Card className={cn('max-w-md w-full', className)} {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            {SignUpFormInputs.map(({ id, label, type, placeholder }) => (
              <FormField
                key={id}
                form={form}
                fieldName={id}
                label={label}
                placeholder={placeholder}
                type={type}
              />
            ))}
            <FieldGroup>
              <Field>
                <Button type="submit" disabled={false}>
                  Create Account
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Log in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
