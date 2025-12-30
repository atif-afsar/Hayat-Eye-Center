import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function LeadDoctor() {
  return (
    <section className="relative py-20 bg-linear-to-b from-white to-green-50 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* DOCTOR IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="/images/dp.jpg"
            alt="Dr Athar Ali - Hayat Eye Center"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* DOCTOR DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-center lg:text-left"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            Lead Eye Specialist
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dr. Athar Ali
          </h2>

          <p className="text-blue-600 font-medium">
            M.B.B.S., M.D., D.O.M.S. (Phaco Surgeon)
          </p>

          {/* INFO LIST */}
          <div className="space-y-2 text-gray-600 text-sm md:text-base">
            <div className="flex justify-center lg:justify-start gap-2 items-start">
              <GraduationCap className="w-5 h-5 text-green-600 mt-0.5" />
              <span>
                Senior Eye Specialist with experience at leading eye hospitals
                including district and referral centers.
              </span>
            </div>

            <div className="flex justify-center lg:justify-start gap-2 items-center">
              <Stethoscope className="w-5 h-5 text-green-600" />
              <span>Specialist in Cataract & Advanced Eye Care</span>
            </div>

            <div className="flex justify-center lg:justify-start gap-2 items-center">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Serving patients in Aligarh & nearby regions</span>
            </div>
          </div>

          {/* SHORT BIO */}
          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            Dr. Athar Ali is committed to providing ethical, precise, and
            patient-focused eye care using modern techniques and compassionate
            treatment approaches at Hayat Eye Center.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-green-500 text-white font-medium shadow-md"
            >
              Book Appointment with Doctor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
