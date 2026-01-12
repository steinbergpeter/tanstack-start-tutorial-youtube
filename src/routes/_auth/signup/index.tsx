import { SignupForm } from '@/components/web/auth/signup-form'
import { createFileRoute } from '@tanstack/react-router'
import AuthFormWrapper from '@/components/web/auth/form-wrapper'

export const Route = createFileRoute('/_auth/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthFormWrapper>
      <SignupForm />
    </AuthFormWrapper>
  )
}
