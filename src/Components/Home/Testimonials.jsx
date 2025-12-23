import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohd. Salman",
    text: "Dr. Athar Ali treated my cataract surgery with great care. The clinic is clean and the staff is very supportive. I highly recommend Hayat Eye Center.",
  },
  {
    name: "Shabana Begum",
    text: "Very polite doctor and staff. My eye problem was explained clearly and treated properly. I feel much better now.",
  },
  {
    name: "Imran Khan",
    text: "One of the best eye clinics in Aligarh. Modern equipment and honest advice. I am fully satisfied with the treatment.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our <span className="text-blue-600">Patients Say</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Real experiences from patients who trusted Hayat Eye Center for
            their eye care.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <Quote className="w-8 h-8 text-green-500 mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-4 text-sm font-medium text-gray-900">
                — {item.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
