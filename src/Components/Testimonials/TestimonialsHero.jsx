import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-blue-50/60 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide"
          >
            Patient Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted by <span className="text-blue-600">Thousands</span>  
            <br className="hidden md:block" /> of Patients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-600 max-w-xl"
          >
            Real experiences from patients who received expert and compassionate
            eye care from <strong>Dr. Athar Ali</strong> at Hayat Eye Centre.
          </motion.p>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute -inset-6 bg-blue-200/30 rounded-full blur-3xl" />

          <img
            src="https://i.pinimg.com/736x/a2/07/41/a20741130b5afb3fd355b6f476d575e8.jpg" // <-- replace with real image
            alt="Happy patient at Hayat Eye Centre"
            className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
