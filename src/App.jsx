import { Routes, Route } from "react-router-dom";
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

export default function App() {
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
 </SmoothScroll>
      <Footer />
     
    </>
  );
}
