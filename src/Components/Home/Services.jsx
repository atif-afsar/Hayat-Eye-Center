import { motion } from "framer-motion";
import {
  Eye,
  Glasses,
  ScanEye,
  Baby,
  ShieldPlus,
  Ambulance,
} from "lucide-react";

const services = [
  {
    title: "Comprehensive Eye Checkup",
    desc: "Detailed vision examinations using modern diagnostic tools for early detection and precise care.",
    icon: Eye,
  },
  {
    title: "Cataract Surgery",
    desc: "Safe and advanced cataract treatment ensuring clear and comfortable vision restoration.",
    icon: Glasses,
  },
  {
    title: "LASIK & Refractive Care",
    desc: "Advanced vision correction solutions designed to reduce dependency on glasses.",
    icon: ScanEye,
  },
  {
    title: "Pediatric Eye Care",
    desc: "Gentle and specialized eye care services tailored specifically for children.",
    icon: Baby,
  },
  {
    title: "Retina & Glaucoma Care",
    desc: "Expert diagnosis and long-term management of complex eye conditions.",
    icon: ShieldPlus,
  },
  {
    title: "Emergency Eye Services",
    desc: "Immediate care for eye injuries, infections, and sudden vision issues.",
    icon: Ambulance,
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Eye Care Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Compassionate, modern, and reliable eye care services designed to
            protect and enhance your vision at every stage of life.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-4 items-start"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
