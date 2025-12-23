import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

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
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#doctor" className="hover:text-white">Doctor</a></li>
            <li><a href="#clinic" className="hover:text-white">Clinic</a></li>
            <li><a href="#appointment" className="hover:text-white">Appointment</a></li>
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
              <span>hayateyecenter@gmail.com</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
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
