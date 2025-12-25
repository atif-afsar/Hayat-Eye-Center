import { motion } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Patients Treated" },
  { value: "15+ Years", label: "Experience" },
  { value: "98%", label: "Patient Satisfaction" },
];

export default function TestimonialsStats() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-4xl font-extrabold text-blue-600">
                {item.value}
              </h3>

              <div className="w-12 h-1 bg-blue-600/20 mx-auto my-4 rounded-full" />

              <p className="text-gray-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
