import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon, title, description, linkText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition">
        {linkText}
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
