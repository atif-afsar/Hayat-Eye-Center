import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import Service from "./Pages/Service";
import Doctors from "./Pages/Doctors";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";

import ScrollToTop from "./Pages/ScrollToTop";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import SmoothScroll from "./Pages/SmoothScroll";
import WhatsAppButton from "./Pages/WhatsAppButton";
import Loader from "./Pages/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // smooth medical feel

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <ScrollToTopOnRouteChange />
      <ScrollToTop />

      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <WhatsAppButton />
      </SmoothScroll>

      <Footer />
    </>
  );
}
