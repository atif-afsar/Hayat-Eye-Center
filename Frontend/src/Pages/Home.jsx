import React, { useEffect } from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import Doctors from '../Components/Home/Doctors'
import Clinic from '../Components/Home/Clinic'
import Testimonials from '../Components/Home/Testimonials'
import Appointment from '../Components/Home/Appointment'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    // small delay to ensure elements are rendered
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      // account for fixed navbar height
      const NAV_OFFSET = 80
      const top = el.getBoundingClientRect().top + (document.scrollingElement?.scrollTop || window.scrollY)
      window.scrollTo({ top: Math.max(0, top - NAV_OFFSET), behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(t)
  }, [location])
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Clinic />
      <Testimonials />
      <Appointment />
    </div>
  )
}

export default Home
