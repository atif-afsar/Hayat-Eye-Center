import { motion } from "framer-motion";
import { Eye, ShieldCheck, Activity, Baby } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4 text-xs font-semibold tracking-wide text-blue-600 uppercase"
            >
              Comprehensive Vision Care
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Advanced Treatments for <br />
              a <span className="text-blue-600">Clearer Vision</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-600 max-w-xl leading-relaxed"
            >
              At Hayat Eye Center, we deliver complete eye care — from preventive
              screenings to advanced microsurgeries — using modern technology,
              ethical practices, and personalized treatment plans.
            </motion.p>

            {/* Service Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl"
            >
              <div className="flex items-start gap-3">
                <Eye className="text-blue-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  LASIK & Refractive Surgery
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Cataract & Lens Replacement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="text-blue-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Retina & Glaucoma Care
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Baby className="text-blue-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Pediatric & Preventive Eye Care
                </p>
              </div>
            </motion.div>

           

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition">
                Explore Services
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
                Book Appointment
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Soft glow */}
            <div className="absolute -inset-6 bg-blue-200/30 blur-3xl rounded-full" />

            <img
              src="/images/Athar.jpg"
              alt="Dr Athar Ali – Eye Specialist at Hayat Eye Center"
              className="relative w-full h-72 md:h-96 rounded-2xl object-cover shadow-xl"
            />

            {/* Doctor Label */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow">
              <p className="text-sm font-semibold text-gray-900">
                Dr. Athar Ali
              </p>
              <p className="text-xs text-gray-600">
                Senior Eye Specialist
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
