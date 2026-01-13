import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import ServicesHero from "../Components/Services/ServicesHero";
import ServiceCategoryTabs from "../Components/Services/ServiceCategoryTabs";
import ServicesGrid from "../Components/Services/ServicesGrid";
import WhyChooseUs from "../Components/Services/WhyChooseUs";
import ProcedureFAQ from "../Components/Services/ProcedureFAQ";
import CTASection from "../Components/Services/CTASection";

const Service = () => {
  const [category, setCategory] = useState("All Services");

  useEffect(() => {
    if (sessionStorage.getItem("scrollToServices")) {
      setTimeout(() => {
        const el = document.getElementById("services-grid");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        sessionStorage.removeItem("scrollToServices");
      }, 120);
    }
  }, []);

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          Eye Care Services in Aligarh | LASIK, Cataract & Eye Treatment
        </title>

        <meta
          name="description"
          content="Explore advanced eye care services in Aligarh including LASIK surgery, cataract treatment, pediatric eye care, and comprehensive vision services by expert ophthalmologists."
        />

        <meta
          name="keywords"
          content="eye care services Aligarh, LASIK surgery Aligarh, cataract treatment Aligarh, eye hospital services, ophthalmology services"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://hayateyecenter.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Eye Care Services in Aligarh | Hayat Eye Center"
        />
        <meta
          property="og:description"
          content="Discover our full range of eye care services including LASIK, cataract surgery, and advanced ophthalmology treatments in Aligarh."
        />
        <meta
          property="og:url"
          content="https://hayateyecenter.com/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hayateyecenter.com/images/og-services.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eye Care Services in Aligarh | Hayat Eye Center"
        />
        <meta
          name="twitter:description"
          content="Advanced LASIK, cataract, and complete eye care services by experienced doctors in Aligarh."
        />
        <meta
          name="twitter:image"
          content="https://hayateyecenter.com/images/og-services.jpg"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div>
        <ServicesHero />
        <ServiceCategoryTabs onChange={setCategory} />
        <ServicesGrid activeCategory={category} />
        <WhyChooseUs />
        <ProcedureFAQ />
        <CTASection />
      </div>
    </>
  );
};

export default Service;
