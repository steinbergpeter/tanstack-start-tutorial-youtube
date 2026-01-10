import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
          defaultOpen: false,
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}

export default Providers
