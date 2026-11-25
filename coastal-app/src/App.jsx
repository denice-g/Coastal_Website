import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Work from './components/Work.jsx'
import Expertise from './components/Expertise.jsx'
import Approach from './components/Approach.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Work />
        <Expertise />
        <Approach />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
