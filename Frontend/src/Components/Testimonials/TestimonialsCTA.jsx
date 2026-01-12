import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TestimonialsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Experience Clear Vision?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-blue-100 max-w-2xl mx-auto"
        >
          Join thousands of satisfied patients who trusted
          <strong className="text-white"> Dr. Athar Ali</strong> for expert eye care
          at Hayat Eye Centre.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-50 transition"
          >
            Contact Us
          </Link>

          <a
            href="tel:+919007966173"
            className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
          >
            Call Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}
