import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Take the First Step Towards Clear Vision
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto text-blue-100"
        >
          Book a consultation with our experienced eye specialists and receive
          personalized care using advanced medical technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button className="px-7 py-3 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition">
            Book Appointment
          </button>

          <button className="px-7 py-3 border border-white rounded-lg text-sm font-semibold hover:bg-white/10 transition">
            Talk to an Expert
          </button>
        </motion.div>

      </div>
    </section>
  );
}
