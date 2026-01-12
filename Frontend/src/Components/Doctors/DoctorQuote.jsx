import { motion } from "framer-motion";

export default function DoctorQuote() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl italic text-gray-700 leading-relaxed"
        >
          “Clear vision is not a luxury — it is a necessity.  
          My mission is to provide safe, ethical, and affordable eye care to
          every patient.”
        </motion.blockquote>

        <p className="mt-6 font-semibold text-gray-900">
          — Dr. Athar Ali
        </p>

      </div>
    </section>
  );
}
