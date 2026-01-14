import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/web/navbar'
import notFoundComponent from '@/components/web/not-found'

export const Route = createFileRoute('/')({
  component: App,
  notFoundComponent,
})

function App() {
  return (
    <div className="bg-sidebar w-full min-h-screen  ">
      <Navbar />
    </div>
  )
}
