import LogoColorBanner from '@/assets/logo-color-banner-600.png'
import { Button, buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/web/theme-toggle'
import useAuthClient from '@/hooks/use-auth-client'
import { Link } from '@tanstack/react-router'

export function Navbar() {
  const { handleSignOut, session, isSessionPending } = useAuthClient()

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={LogoColorBanner}
              alt="TanStack Start Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-lg font-semibold">TanStack Start</h1>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {isSessionPending ? null : session ? (
            <>
              <Button
                onClick={handleSignOut}
                className={buttonVariants({ variant: 'secondary' })}
              >
                Logout
              </Button>
              <Link to="/dashboard" className={buttonVariants()}>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({ variant: 'secondary' })}
              >
                Login
              </Link>
              <Link to="/signup" className={buttonVariants()}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
