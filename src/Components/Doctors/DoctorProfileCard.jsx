import { motion } from "framer-motion";

export default function DoctorProfile() {
  return (
    <section className="pb-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="https://i.pinimg.com/736x/4c/aa/04/4caa04a958f1fb3b0ba682fe766f977a.jpg"
              alt="Dr. Athar Ali - Ophthalmologist"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Dr. Athar Ali
            </h3>

            <p className="mt-2 text-blue-600 font-semibold">
              M.B.B.S., M.D., D.O.M.S. (Phaco Surgeon)
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Dr. Athar Ali is a highly experienced ophthalmologist with a
              strong background in cataract surgery and comprehensive eye
              care. He has served as a senior eye surgeon at multiple reputed
              eye hospitals across Uttar Pradesh.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Hayat Eye Centre, he focuses on safe surgical outcomes,
              accurate diagnosis, and patient-first treatment using modern
              ophthalmic technology.
            </p>

            <div className="mt-6">
              <a href="tel:9536942000">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
