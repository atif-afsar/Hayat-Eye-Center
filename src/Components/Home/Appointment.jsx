import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck, MapPin } from "lucide-react";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="relative py-20 bg-linear-to-br from-blue-600 to-green-600 text-white overflow-hidden"
    >
      {/* Soft overlays */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Book Your Eye Consultation Today
          </h2>
          <p className="mt-4 text-white/90">
            Get expert eye care from Dr. Athar Ali at Hayat Eye Center.  
            Call us or visit the clinic for appointments and consultations.
          </p>
        </motion.div>

        {/* CTA ACTIONS */}
        <div className="mt-12 grid sm:grid-cols-3 gap-8">

          {/* Call */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:9007966173"
            className="flex flex-col items-center gap-3 bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <PhoneCall className="w-8 h-8 text-white" />
            <span className="font-semibold">Call Now</span>
            <span className="text-sm text-white/80">9007966173</span>
          </motion.a>

          {/* Visit */}
          <div className="flex flex-col items-center gap-3 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <MapPin className="w-8 h-8 text-white" />
            <span className="font-semibold">Visit Clinic</span>
            <span className="text-sm text-white/80 text-center">
              Kela Nagar Chauraha,<br />
              Jivangarh Road, Aligarh
            </span>
          </div>

          {/* Appointment */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:9536942000"
            className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 text-blue-700 shadow-lg"
          >
            <CalendarCheck className="w-8 h-8" />
            <span className="font-semibold">Book Appointment</span>
            <span className="text-sm">9536942000</span>
          </motion.a>

        </div>

      </div>
    </section>
  );
}
