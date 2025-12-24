import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 text-center shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to See the World Clearly?</h3>
          <p className="mt-3 text-white/90">Don't let vision problems hold you back. Schedule a consultation with our experts today and experience the difference.</p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="bg-white text-blue-600 px-5 py-2 rounded-md font-semibold">Book an Appointment</a>
            <a href="#" className="border border-white/30 text-white px-5 py-2 rounded-md">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
