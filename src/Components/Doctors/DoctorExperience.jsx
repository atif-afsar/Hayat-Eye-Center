import { motion } from "framer-motion";

const experience = [
  "Former Senior Eye Surgeon – K.D. Eye Hospital, Hathras",
  "Former Senior Eye Surgeon – Nayati Eye Hospital, Mathura",
  "Former Senior Eye Surgeon – Mission Eye Hospital, Kasganj",
  "Specialist in Cataract & Phaco Surgery",
  "Trusted by thousands of patients across the region",
];

export default function DoctorExperience() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 border rounded-xl bg-gray-50 text-center"
          >
            <p className="text-sm font-semibold text-gray-800">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
