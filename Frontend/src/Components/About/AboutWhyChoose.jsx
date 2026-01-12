import { motion } from "framer-motion";

const principles = [
  {
    title: "Our Mission",
    desc: "To provide comprehensive, state-of-the-art eye care services with a human touch — ensuring quality vision is accessible to everyone in our community.",
    color: "bg-white"
  },
  {
    title: "Our Vision",
    desc: "To be recognized as the leading center for ophthalmic excellence in the region, pioneering new treatments and setting benchmarks in patient safety.",
    color: "bg-white"
  },
  {
    title: "Our Values",
    desc: "Integrity in our practice, compassion in our care, innovation in our methods, and an unwavering commitment to our patients' well-being.",
    color: "bg-white"
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-900"
        >
          Our Guiding <span className="text-blue-600"> Principles</span>
        </motion.h3>
        <p className="text-center text-gray-600 mt-3">Built on a foundation of trust and medical excellence.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-xl shadow-sm ${p.color}`}
            >
              <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM4 22v-2a4 4 0 014-4h8a4 4 0 014 4v2"/></svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{p.title}</h4>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
