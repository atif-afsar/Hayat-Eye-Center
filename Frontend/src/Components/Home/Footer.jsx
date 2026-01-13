import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Hayat <span className="text-green-400">Eye Center</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Hayat Eye Center is committed to providing ethical, modern, and
            compassionate eye care services under the guidance of
            experienced specialists.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>

            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-white">Doctor</Link></li>
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
              <span>
                Kela Nagar Chauraha,<br />
                Jivangarh Road, Aligarh
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-green-400" />
              <span>9007966173, 9536942000</span>
            </div>

            <div className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-green-400" />
              <span>hayateyecentre786@gmail.com</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/17vXMKQCQT/" className="group
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-gradient-to-tr from-blue-600 via-blue-700
                shadow-md
                transition-all duration-300
                hover:scale-110
                hover:shadow-xl">
              <Facebook />
            </a>
           <a
              href="https://www.instagram.com/hayat_eyecentre?igsh=enFiNjBzNjhsdXFs"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400
                shadow-md
                transition-all duration-300
                hover:scale-110
                hover:shadow-xl
              "
                          >
                <Instagram
                  size={20}
                  className="text-white transition-transform duration-300 group-hover:rotate-6"
                />
              </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hayat Eye Center. All rights reserved.
      </div>
    </footer>
  );
}
