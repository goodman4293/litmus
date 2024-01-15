import Footer from '../components/layout/Footer'
import Landing from '../components/layout/Landing'
import Topbar from '../components/layout/Topbar'

export default function Home() {
  return (
    <main className="h-auto w-full flex-col items-center">
      <Topbar />
      <Landing />
      <Footer />
    </main>
  )
}
