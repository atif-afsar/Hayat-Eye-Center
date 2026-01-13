import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import ContactHero from "../Components/Contact/ContactHero";
import ContactInfoCards from "../Components/Contact/ContactInfoCards";
import ContactMap from "../Components/Contact/ContactMap";
import AppointmentForm from "../Components/Contact/AppointmentForm";
import TrustBadges from "../Components/Contact/TrustBadges";
import ContactCTA from "../Components/Contact/ContactCTA";

const Contact = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = stored
      ? stored === "dark"
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>
          Contact Hayat Eye Center | Book Eye Appointment in Aligarh
        </title>

        <meta
          name="description"
          content="Contact Hayat Eye Center in Aligarh to book an appointment with expert eye doctors. Get directions, phone number, and consultation support."
        />

        <meta
          name="keywords"
          content="contact eye hospital Aligarh, book eye appointment Aligarh, eye doctor contact, Hayat Eye Center contact"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://hayateyecenter.com/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact & Appointment | Hayat Eye Center Aligarh"
        />
        <meta
          property="og:description"
          content="Book your eye check-up or consultation with experienced ophthalmologists at Hayat Eye Center in Aligarh."
        />
        <meta
          property="og:url"
          content="https://hayateyecenter.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://hayateyecenter.com/images/og-contact.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book Eye Appointment | Hayat Eye Center"
        />
        <meta
          name="twitter:description"
          content="Contact Hayat Eye Center to book an eye consultation or get directions in Aligarh."
        />
        <meta
          name="twitter:image"
          content="https://hayateyecenter.com/images/og-contact.jpg"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex justify-end">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="px-3 py-2 rounded-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-sm"
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>

        <ContactHero />
        <ContactInfoCards />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContactMap />
          </div>
          <div className="lg:col-span-1">
            <div className="mt-6 lg:mt-0">
              <AppointmentForm />
              <div className="mt-4">
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10">
          <ContactCTA />
        </div>
      </div>
    </>
  );
};

export default Contact;
