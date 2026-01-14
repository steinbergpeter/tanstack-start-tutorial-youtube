import { TanStackDevtools } from './tanstack-dev-tools'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/sonner'

interface ProvidersProps {
  children: React.ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider>
        {children}
        <Toaster closeButton position="top-center" richColors />
      </ThemeProvider>
      <TanStackDevtools position="bottom-right" defaultOpen={false} />
    </>
  )
}

export default Providers
