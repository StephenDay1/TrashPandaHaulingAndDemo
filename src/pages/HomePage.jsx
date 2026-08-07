import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChoose from '../components/WhyChoose'
import Footer from '../components/Footer'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <div className="min-h-svh">
      <Header variant="overlay" />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  )
}
