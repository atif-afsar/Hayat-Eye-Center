import { Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}
