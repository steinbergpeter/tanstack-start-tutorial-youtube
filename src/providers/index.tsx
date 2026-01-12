import { TanStackDevtools } from './tanstack-dev-tools'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
      <TanStackDevtools />
    </>
  )
}

export default Providers
