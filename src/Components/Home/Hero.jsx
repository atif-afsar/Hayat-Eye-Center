import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-linear-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Trusted Eye Care in Aligarh
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Caring for Your <span className="text-blue-600">Vision</span>, <br className="hidden sm:block" />
            Every Step of the Way
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            At Hayat Eye Center, we provide advanced eye care with compassion,
            precision, and modern technology to protect what matters most —
            your vision.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-green-500 text-white font-medium shadow-md"
            >
              Book Appointment
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919007966173"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50"
            >
              Call Now
            </motion.a>
          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-500">
            <span>✔ Experienced Specialists</span>
            <span>✔ Modern Equipment</span>
            <span>✔ Patient-First Care</span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL (BLENDED ILLUSTRATION) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Soft background glow (hidden on small screens) */}
          <div className="hidden md:block absolute -top-20 -right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-0 -left-10 w-80 h-80 bg-green-200/40 rounded-full blur-3xl" />

          {/* Image blended with bg */}
         <img
            src="images/img1.jpg"
            alt="Hayat Eye Center Illustration"
            className="
              relative z-10
              w-full
              max-w-none      
              h-auto
              object-contain
              mix-blend-multiply
              scale-110 sm:scale-125 md:scale-140 lg:scale-150
            "
          />


        </motion.div>

      </div>
    </section>
  );
}
