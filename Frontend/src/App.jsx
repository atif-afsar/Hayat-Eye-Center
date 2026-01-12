import { Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";

import ScrollToTop from "./Pages/ScrollToTop";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import SmoothScroll from "./Pages/SmoothScroll";
import WhatsAppButton from "./Pages/WhatsAppButton";
import Loader from "./Pages/Loader";

/* Lazy Pages */
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Service = lazy(() => import("./Pages/Service"));
const Doctors = lazy(() => import("./Pages/Doctors"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));
const Contact = lazy(() => import("./Pages/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const visited = sessionStorage.getItem("visited");

  if (!visited) {
    setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", "true");
    }, 800);
  } else {
    setLoading(false);
  }
}, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <ScrollToTopOnRouteChange />
      <ScrollToTop />

      <SmoothScroll>
        {/* LAZY ROUTES */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <WhatsAppButton />
      </SmoothScroll>

      <Footer />
    </>
  );
}
