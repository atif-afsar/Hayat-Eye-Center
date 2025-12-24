import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience", icon: "calendar" },
  { value: "5k+", label: "Successful Surgeries", icon: "check" },
  { value: "10k+", label: "Happy Patients", icon: "smile" },
  { value: "20+", label: "Expert Staff", icon: "users" },
];

function Icon({ name }) {
  if (name === "calendar")
    return (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    );
  if (name === "check")
    return (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    );
  if (name === "smile")
    return (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
    );
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V8H2v12h5" /></svg>
  );
}

export default function AboutStats() {
  return (
    <section className="py-6 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center items-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                <Icon name={s.icon} />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
              <div className="text-sm opacity-90 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
