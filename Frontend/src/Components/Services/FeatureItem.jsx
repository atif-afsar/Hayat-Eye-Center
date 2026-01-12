import { motion } from "framer-motion";

export default function FeatureItem({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h4 className="text-base font-semibold text-gray-900">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
