import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../Components/Home/Hero";
import Services from "../Components/Home/Services";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Doctors from "../Components/Home/Doctors";
import Clinic from "../Components/Home/Clinic";
import Testimonials from "../Components/Home/Testimonials";
import Appointment from "../Components/Home/Appointment";

function Home() {
  const location = useLocation();

  /* 🔥 SAFE SEO (NO LIBRARY) */
  useEffect(() => {
    // Title
    document.title =
      "Hayat Eye Center | Best Eye Hospital & Eye Doctor in Aligarh";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Hayat Eye Center is a leading eye hospital in Aligarh providing advanced eye care, cataract surgery, LASIK, retina treatment, and expert ophthalmology services."
    );

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://hayateyecenter.com/");
  }, []);

  /* 🔗 HASH SCROLL (YOUR EXISTING LOGIC) */
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const NAV_OFFSET = 80;
      const top =
        el.getBoundingClientRect().top +
        (document.scrollingElement?.scrollTop || window.scrollY);
      window.scrollTo({
        top: Math.max(0, top - NAV_OFFSET),
        behavior: "smooth",
      });
    }, 50);
    return () => clearTimeout(t);
  }, [location]);

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
  );
}

export default Home;
