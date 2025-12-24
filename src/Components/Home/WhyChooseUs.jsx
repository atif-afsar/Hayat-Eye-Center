import { motion } from "framer-motion";
import {
  Handshake,
  UserCheck,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Patient-First Care",
    desc: "We treat every patient with compassion, respect, and personalized attention at every step.",
    icon: Handshake,
  },
  {
    title: "Experienced Specialists",
    desc: "Our eye specialists bring years of expertise in diagnosing and treating complex eye conditions.",
    icon: UserCheck,
  },
  {
    title: "Advanced Technology",
    desc: "Equipped with modern diagnostic and surgical technology for accurate and safe treatments.",
    icon: Microscope,
  },
  {
    title: "Trusted & Safe Environment",
    desc: "We follow strict hygiene, safety, and quality standards to ensure patient confidence.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Hayat Eye Center</span>
          </h2>
          <p className="mt-4 text-gray-600">
            A place where experience, technology, and compassionate care come
            together to protect your vision.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-green-600" strokeWidth={1.7} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
