import React from "react";
import { Helmet } from "react-helmet-async";

import AboutHero from "../Components/About/AboutHero";
import AboutStats from "../Components/About/AboutStats";
import AboutWhyChoose from "../Components/About/AboutWhyChoose";
import AboutDoctorsNote from "../Components/About/AboutDoctorsNote";
import AboutFacilities from "../Components/About/AboutFacilities";
import AboutCTA from "../Components/About/AboutCTA";

const About = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>About Hayat Eye Center | Trusted Eye Hospital in Aligarh</title>

        <meta
          name="description"
          content="Learn about Hayat Eye Center, a trusted eye hospital in Aligarh offering advanced eye care, LASIK, cataract surgery, and expert ophthalmology services."
        />

        <meta
          name="keywords"
          content="Hayat Eye Center, eye hospital in Aligarh, about eye hospital, best eye doctor Aligarh, ophthalmologist Aligarh"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://hayateyecenter.com/about"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Hayat Eye Center" />
        <meta
          property="og:description"
          content="Discover our mission, doctors, and advanced eye care services at Hayat Eye Center in Aligarh."
        />
        <meta
          property="og:url"
          content="https://hayateyecenter.com/about"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://hayateyecenter.com/images/og-about.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Hayat Eye Center | Eye Care Experts"
        />
        <meta
          name="twitter:description"
          content="Know more about Hayat Eye Center, providing trusted eye care and modern treatments in Aligarh."
        />
        <meta
          name="twitter:image"
          content="https://hayateyecenter.com/images/og-about.jpg"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div>
        <AboutHero />
        <AboutStats />
        <AboutWhyChoose />
        <AboutDoctorsNote />
        <AboutFacilities />
        <AboutCTA />
      </div>
    </>
  );
};

export default About;
