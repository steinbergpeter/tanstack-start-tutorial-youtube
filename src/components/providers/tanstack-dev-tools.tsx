import { TanStackDevtools as RawTanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

interface TanStackDevtoolsProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  defaultOpen: boolean
}

const TanStackDevtools = ({
  position = 'bottom-right',
  defaultOpen = false,
}: TanStackDevtoolsProps) => {
  return (
    <RawTanStackDevtools
      config={{
        position,
        defaultOpen,
      }}
      plugins={[
        {
          name: 'Tanstack Router',
          render: <TanStackRouterDevtoolsPanel />,
        },
      ]}
    />
  )
}

export { TanStackDevtools }
