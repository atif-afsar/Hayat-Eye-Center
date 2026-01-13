import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import TestimonialsHero from "../Components/Testimonials/TestimonialsHero";
import TestimonialsStats from "../Components/Testimonials/TestimonialsStats";
import TestimonialsGrid from "../Components/Testimonials/TestimonialsGrid";
import TestimonialsCTA from "../Components/Testimonials/TestimonialsCTA";

function Testimonials() {
  useEffect(() => {
    if (sessionStorage.getItem("scrollToTestimonials")) {
      setTimeout(() => {
        const el = document.getElementById("testimonials-grid");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        sessionStorage.removeItem("scrollToTestimonials");
      }, 120);
    }
  }, []);

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          Patient Reviews & Testimonials | Hayat Eye Center Aligarh
        </title>

        <meta
          name="description"
          content="Read real patient reviews and testimonials about LASIK, cataract surgery, and eye treatments at Hayat Eye Center in Aligarh."
        />

        <meta
          name="keywords"
          content="eye hospital reviews Aligarh, patient testimonials eye care, LASIK reviews Aligarh, cataract surgery reviews"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://hayateyecenter.com/testimonials"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Patient Reviews & Testimonials | Hayat Eye Center"
        />
        <meta
          property="og:description"
          content="See what our patients say about their eye care experience at Hayat Eye Center in Aligarh."
        />
        <meta
          property="og:url"
          content="https://hayateyecenter.com/testimonials"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hayateyecenter.com/images/og-testimonials.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Patient Testimonials | Hayat Eye Center"
        />
        <meta
          name="twitter:description"
          content="Real patient experiences with LASIK, cataract, and eye treatments in Aligarh."
        />
        <meta
          name="twitter:image"
          content="https://hayateyecenter.com/images/og-testimonials.jpg"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div>
        <TestimonialsHero />
        <TestimonialsStats />
        <TestimonialsGrid />
        <TestimonialsCTA />
      </div>
    </>
  );
}

export default Testimonials;
