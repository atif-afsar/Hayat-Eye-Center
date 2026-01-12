import { motion } from "framer-motion";
import { PhoneCall, Calendar } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mt-16 sm:mt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 lg:p-14 text-white"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Expert Eye Care You Can Trust
            </h3>

            <p className="mt-3 sm:mt-4 text-blue-100 text-sm sm:text-base max-w-md">
              From routine eye check-ups to advanced surgeries, our experienced
              specialists deliver personalized care using modern technology.
            </p>

            {/* Trust points */}
            <div className="mt-5 sm:mt-6 space-y-2 text-xs sm:text-sm text-blue-50">
              <p>✔ 15+ Years of Clinical Excellence</p>
              <p>✔ Advanced Diagnostic & Surgical Care</p>
              <p>✔ Thousands of Satisfied Patients</p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-56 sm:h-64 md:h-auto"
          >
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

            <img
              src="/images/about.jpg"
              alt="Doctor at Hayat Eye Center"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
