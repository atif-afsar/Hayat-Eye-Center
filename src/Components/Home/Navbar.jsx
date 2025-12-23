import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-linear-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold">
            H
          </div>
          <span className="text-xl font-semibold text-gray-800">
            Hayat <span className="text-blue-600">Eye Center</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <motion.div whileHover={{ y: -2 }}>
            <Link to="/" className="text-gray-700 font-medium hover:text-blue-600">
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600">
              About
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ y: -2 }}
            href={isHome ? "#services" : "/#services"}
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Services
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href={isHome ? "#doctor" : "/#doctor"}
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Doctors
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href={isHome ? "#testimonials" : "/#testimonials"}
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Testimonials
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href={isHome ? "#appointment" : "/#appointment"}
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Contact
          </motion.a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={isHome ? "#appointment" : "/#appointment"}
            className="px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-green-500 text-white font-medium shadow-md"
          >
            Book Appointment
          </motion.a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>

            <a href={isHome ? "#services" : "/#services"} onClick={() => setOpen(false)}>Services</a>
            <a href={isHome ? "#doctor" : "/#doctor"} onClick={() => setOpen(false)}>Doctors</a>
            <a href={isHome ? "#testimonials" : "/#testimonials"} onClick={() => setOpen(false)}>Testimonials</a>

            <a
              href={isHome ? "#appointment" : "/#appointment"}
              className="block text-center bg-linear-to-r from-blue-600 to-green-500 text-white py-2 rounded-full"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
