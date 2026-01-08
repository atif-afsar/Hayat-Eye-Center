import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Khan",
    treatment: "Cataract Surgery",
    review:
      "The treatment was smooth and painless. Dr. Athar Ali explained everything clearly. My vision is perfect now.",
    rating: 5,
    image: "/images/testi1.png",
  },
  {
    name: "Mohammad Arif",
    treatment: "LASIK Consultation",
    review:
      "Very professional staff and excellent care. The hospital is clean and well managed. Highly recommended.",
    rating: 5,
    image: "/images/testi2.png",
  },
  {
    name: "Neha Sharma",
    treatment: "Eye Checkup",
    review:
      "I felt comfortable throughout the process. Doctor listened patiently and gave the right guidance.",
    rating: 4,
    image: "images/testi3.png",
  },
];

export default function TestimonialsGrid() {
  return (
    <section id="testimonials-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Patients <span className="text-blue-600">Say</span>
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Genuine feedback from patients who trusted Hayat Eye Centre
            with their vision care.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
