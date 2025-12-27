import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 bg-[#F8FAFC]">
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
              a <span className="text-blue-600"> Clearer Vision</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-600 max-w-xl leading-relaxed"
            >
              From routine check-ups to complex robotic surgeries, Hayat Eye
              Center combines medical expertise with state-of-the-art technology
              to protect and restore your vision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                Explore Services
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
                Patient Reviews
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
           <img
            src="/images/Athar.jpg"
            alt="Eye examination at Hayat Eye Center"
            className="w-full h-64 md:h-72 rounded-2xl object-cover"
          />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
