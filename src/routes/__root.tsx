import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import Providers from '@/providers'
import { ThemeProvider } from '@/providers/theme-provider'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

interface RootDocumentProps {
  children: React.ReactNode
}

function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
