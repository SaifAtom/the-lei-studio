import useReveal from './hooks/useReveal.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Prices from './components/Prices.jsx'
import Infos from './components/Infos.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <Infos />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
