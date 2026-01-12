import { motion } from "framer-motion";
import { Star, HeartPulse, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TestimonialsHero() {
  const navigate = useNavigate();

  function handleViewAll(e) {
    e.preventDefault();
    const el = document.getElementById("testimonials-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      sessionStorage.setItem("scrollToTestimonials", "1");
      navigate("/testimonials");
    }
  }
  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-blue-50/60 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide"
          >
            Patient Testimonials
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted by <span className="text-blue-600">Thousands</span>
            <br className="hidden md:block" /> of Happy Patients
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-600 max-w-xl"
          >
            Real stories from patients who experienced advanced, compassionate,
            and personalized eye care under the expertise of
            <strong> Dr. Athar Ali</strong> at Hayat Eye Centre.
          </motion.p>

          {/* Trust Points */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-8 space-y-4 text-left max-w-xl mx-auto lg:mx-0"
          >
            <li className="flex items-start gap-3">
              <ShieldCheck className="text-blue-600 mt-1" />
              <span className="text-gray-700">
                Ethical treatment with transparent diagnosis and guidance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <HeartPulse className="text-blue-600 mt-1" />
              <span className="text-gray-700">
                Patient-first care with modern equipment and techniques
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Star className="text-blue-600 mt-1" />
              <span className="text-gray-700">
                Highly rated by patients for results and comfort
              </span>
            </li>
          </motion.ul>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0"
          >
            <div>
              <h4 className="text-3xl font-bold text-blue-600">10K+</h4>
              <p className="text-sm text-gray-600 mt-1">Patients Treated</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600">15+</h4>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600">98%</h4>
              <p className="text-sm text-gray-600 mt-1">Patient Satisfaction</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <button onClick={handleViewAll} type="button" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              View All Testimonials
            </button>
          </motion.div>

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
            src="/images/instru.jpg"
            alt="Happy patient at Hayat Eye Centre"
            className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
