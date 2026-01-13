import React from "react";
import { Helmet } from "react-helmet-async";

import DoctorIntro from "../Components/Doctors/DoctorIntro";
import DoctorProfileCard from "../Components/Doctors/DoctorProfileCard";
import DoctorExperience from "../Components/Doctors/DoctorExperience";
import DoctorQuote from "../Components/Doctors/DoctorQuote";

const Doctors = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          Our Eye Specialists & Doctors in Aligarh | Hayat Eye Center
        </title>

        <meta
          name="description"
          content="Meet our experienced eye doctors and ophthalmologists in Aligarh at Hayat Eye Center. Trusted specialists offering advanced eye care and modern treatments."
        />

        <meta
          name="keywords"
          content="eye doctors in Aligarh, ophthalmologist Aligarh, eye specialist Aligarh, best eye doctor, Hayat Eye Center doctors"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://hayateyecenter.com/doctors"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Our Eye Specialists & Doctors | Hayat Eye Center"
        />
        <meta
          property="og:description"
          content="Know our expert eye doctors and ophthalmologists providing advanced eye care in Aligarh."
        />
        <meta
          property="og:url"
          content="https://hayateyecenter.com/doctors"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://hayateyecenter.com/images/og-doctors.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eye Doctors in Aligarh | Hayat Eye Center"
        />
        <meta
          name="twitter:description"
          content="Meet our skilled ophthalmologists and eye specialists at Hayat Eye Center in Aligarh."
        />
        <meta
          name="twitter:image"
          content="https://hayateyecenter.com/images/og-doctors.jpg"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div>
        <DoctorIntro />
        <DoctorProfileCard />
        <DoctorExperience />
        <DoctorQuote />
      </div>
    </>
  );
};

export default Doctors;
