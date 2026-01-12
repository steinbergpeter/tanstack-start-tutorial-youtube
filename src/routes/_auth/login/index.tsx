import { LoginForm } from '@/components/web/auth/login-form'
import { createFileRoute } from '@tanstack/react-router'
import AuthFormWrapper from '@/components/web/auth/form-wrapper'

export const Route = createFileRoute('/_auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthFormWrapper>
      <LoginForm />
    </AuthFormWrapper>
  )
}
