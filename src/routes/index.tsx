import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/web/navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="bg-sidebar w-full min-h-screen  ">
      <Navbar />
    </div>
  )
}
