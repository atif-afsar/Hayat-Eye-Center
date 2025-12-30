import { motion } from "framer-motion";

const images = [
  {
    src:
      "/images/facilities1.png",
    title: "Diagnostic Imaging"
  },
  {
    src:
      "/images/facilities2.png",
    title: "Comfortable Consultation Rooms"
  },
  {
    src:
      "/images/facilities3.png",
    title: "Advanced Surgical Suite"
  },
];

export default function AboutFacilities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">World-Class Facilities</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.08 }} className="rounded-xl overflow-hidden shadow">
              <img src={it.src} alt={it.title} className="w-full h-44 object-cover" />
              <div className="p-4 bg-white">
                <div className="font-semibold text-gray-800">{it.title}</div>
                <div className="text-sm text-gray-600 mt-1">Equipped with cutting-edge technology for precise diagnostics and treatment.</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
