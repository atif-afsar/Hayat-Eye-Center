import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-24 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-slate-700 to-slate-500"
        >
          <div className="relative h-56 md:h-72 lg:h-80">
            <img
              alt="clinic"
              src="images/about.jpg"
              className="absolute inset-0 w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            <div className="absolute left-6 top-6 bottom-6 flex flex-col justify-center text-left text-white max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Vision for a Better <span className="text-blue-600"> Life</span>
              </h1>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-xl">
                At Hayat Eye Center, we combine decades of medical excellence
                with compassionate care to bring clarity to your world.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
