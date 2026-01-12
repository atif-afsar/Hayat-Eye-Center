import React from 'react'
import DoctorIntro from '../Components/Doctors/DoctorIntro'
import DoctorProfileCard from '../Components/Doctors/DoctorProfileCard'
import DoctorExperience from '../Components/Doctors/DoctorExperience'
import DoctorQuote from '../Components/Doctors/DoctorQuote'

const Doctors = () => {
  return (
    <div>
      <DoctorIntro />
      <DoctorProfileCard />
      <DoctorExperience />
      <DoctorQuote />
    </div>
  )
}

export default Doctors
