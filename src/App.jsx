import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream text-ink font-sans min-h-screen">
      <Nav />
      <Hero />
      <Featured />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}