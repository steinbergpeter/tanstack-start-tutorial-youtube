import { TanStackDevtools as TDT } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

const TanStackDevtools = () => {
  return (
    <TDT
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
  )
}

export { TanStackDevtools }
