import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutStats from '../Components/About/AboutStats'
import AboutWhyChoose from '../Components/About/AboutWhyChoose'
import AboutDoctorsNote from '../Components/About/AboutDoctorsNote'
import AboutFacilities from '../Components/About/AboutFacilities'
import AboutCTA from '../Components/About/AboutCTA'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <AboutWhyChoose />
      <AboutDoctorsNote />
      <AboutFacilities />
      <AboutCTA />
    </div>
  )
}

export default About
