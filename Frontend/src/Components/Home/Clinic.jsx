import { motion } from "framer-motion";
import { Building2, ShieldCheck, Microscope } from "lucide-react";

export default function Clinic() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* CLINIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="/images/IMG4.jpg"
            alt="Hayat Eye Center Aligarh"
            className="w-full max-w-lg object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* CLINIC DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Our Clinic
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Modern & Trusted <span className="text-blue-600">Eye Care Facility</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            Hayat Eye Center is designed to provide a clean, comfortable, and
            safe environment for patients, supported by modern equipment and
            strict hygiene standards.
          </p>

          {/* HIGHLIGHTS */}
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-center lg:justify-start gap-3 items-start">
              <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
              <span>Well-equipped and patient-friendly clinic infrastructure</span>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 items-start">
              <Microscope className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Advanced diagnostic & surgical eye equipment</span>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
              <span>High standards of cleanliness, safety & hygiene</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
