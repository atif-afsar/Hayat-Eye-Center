import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (id) => {
    if (isHome) {
      // close mobile menu if open
      setOpen(false);
      setTimeout(() => scrollToId(id), 50);
    } else {
      // navigate to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
         <img src="/images/hayatLogo.png" alt="Hayat Eye Center Logo" className="w-13 h-13 rounded-full" />
          <span className="text-lg sm:text-xl font-semibold text-gray-800">
            Hayat <span className="text-blue-600">Eye Center</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>

         
          <Link to="/doctors" className="text-gray-700 hover:text-blue-600 font-medium">Doctors</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</Link> 
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigate('appointment')}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium shadow-md"
          >
            Book Appointment
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t fixed left-0 right-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-center">

              <Link to="/" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                Home
              </Link>

              <Link to="/about" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                About
              </Link>

              <Link to="/services" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                Services
              </Link>

              <Link to="/doctors" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                Doctors
              </Link>

             <Link to="/testimonials" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                Testimonials
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="text-gray-800 text-lg font-medium py-2">
                Contact
              </Link>

              {/* CTA */}
              <button
              
                onClick={() => handleNavigate('/contact')}
                className="mt-3 block w-full rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 font-semibold"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
