import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Doctors",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-full bg-linear-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold">
            H
          </div>
          <span className="text-xl font-semibold text-gray-800">
            Hayat <span className="text-blue-600">Eye Center</span>
          </span>
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#appointment"
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
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 font-medium"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#appointment"
              className="block text-center bg-linear-to-r from-blue-600 to-green-500 text-white py-2 rounded-full"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
