import { motion } from "framer-motion";

export default function DoctorHero() {
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-blue-600 uppercase tracking-wide"
        >
          Meet Our Eye Specialist
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
        >
          Dr. <span className="text-blue-600">Athar Ali</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Senior Consultant Ophthalmologist & Phaco Surgeon dedicated to
          delivering ethical, precise, and compassionate eye care.
        </motion.p>

      </div>
    </section>
  );
}
