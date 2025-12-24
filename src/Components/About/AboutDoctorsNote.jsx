import { motion } from "framer-motion";

export default function AboutDoctorsNote() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.pinimg.com/736x/a3/09/6b/a3096b623ef66672f883a07ec2677fe4.jpg"
            alt="doctor"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow"
          />

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1">
            <blockquote className="text-gray-800 text-lg md:text-xl italic leading-relaxed">
              "Our patients trust us with their most precious sense—their sight. We
              honor that trust by treating every individual like family, ensuring
              they receive the safest and most advanced care possible."
            </blockquote>

            <div className="mt-4">
              <div className="font-semibold text-gray-900">   Dr. Athar Ali</div>
              <div className="text-sm text-gray-600"> M.B.B.S., M.D., D.O.M.S. (Phaco Surgeon)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
