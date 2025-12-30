import React, { useEffect } from 'react'
import TestimonialsHero from '../Components/Testimonials/TestimonialsHero'
import TestimonialsStats from '../Components/Testimonials/TestimonialsStats'
import TestimonialsGrid from '../Components/Testimonials/TestimonialsGrid'
import TestimonialsCTA from '../Components/Testimonials/TestimonialsCTA'

function Testimonials() {
  useEffect(() => {
    if (sessionStorage.getItem('scrollToTestimonials')) {
      setTimeout(() => {
        const el = document.getElementById('testimonials-grid');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        sessionStorage.removeItem('scrollToTestimonials');
      }, 120);
    }
  }, []);
  return (
    <div>
      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid />
      <TestimonialsCTA />
    </div>
  )
}

export default Testimonials
