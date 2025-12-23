import React from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import Doctors from '../Components/Home/Doctors'
import Clinic from '../Components/Home/Clinic'
import Testimonials from '../Components/Home/Testimonials'
import App from '../App'
import Appointment from '../Components/Home/Appointment'

function Home() {
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
