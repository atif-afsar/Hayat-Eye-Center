import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All Services",
  "Cataract",
  "Refractive Surgery",
  "Retina",
  "Glaucoma",
  "Pediatric",
  "Cornea",
];

export default function ServiceCategoryTabs({ onChange }) {
  const [active, setActive] = useState("All Services");

  const handleClick = (category) => {
    setActive(category);
    onChange?.(category); // optional callback for filtering
  };

  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, i) => {
            const isActive = active === category;

            return (
              <motion.button
                key={i}
                onClick={() => handleClick(category)}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
