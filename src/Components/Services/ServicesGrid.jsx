import ServiceCard from "./ServiceCard";
import {
  Eye,
  Focus,
  Shield,
  Baby,
  Activity,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Cataract Services",
    category: "Cataract",
    description:
      "Restore clarity with advanced phacoemulsification and micro-incision cataract surgery.",
    icon: <Eye size={20} />,
    linkText: "View Procedure Details",
  },
  {
    title: "Refractive Surgery",
    category: "Refractive Surgery",
    description:
      "Freedom from glasses with LASIK, SMILE Pro, PRK, and ICL procedures.",
    icon: <Focus size={20} />,
    linkText: "Explore Options",
  },
  {
    title: "Retina Services",
    category: "Retina",
    description:
      "Advanced treatment for diabetic retinopathy, macular degeneration, and retinal detachment.",
    icon: <Layers size={20} />,
    linkText: "Learn More",
  },
  {
    title: "Glaucoma Management",
    category: "Glaucoma",
    description:
      "Early diagnosis and advanced laser or surgical glaucoma treatments.",
    icon: <Shield size={20} />,
    linkText: "View Treatments",
  },
  {
    title: "Pediatric Ophthalmology",
    category: "Pediatric",
    description:
      "Specialized eye care for children including squint and lazy eye treatment.",
    icon: <Baby size={20} />,
    linkText: "Child Care Details",
  },
  {
    title: "Cornea & Ocular Surface",
    category: "Cornea",
    description:
      "Treatment for corneal disorders, dry eye syndrome, and keratoconus.",
    icon: <Activity size={20} />,
    linkText: "Read More",
  },
];

export default function ServicesGrid({ activeCategory }) {
  const filteredServices =
    !activeCategory || activeCategory === "All Services"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            World-Class Eye Care Specialties
          </h2>
          <p className="mt-4 text-gray-600">
            Our clinic is equipped with the latest diagnostic and surgical
            technology to handle everything from routine exams to complex
            ocular surgeries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
