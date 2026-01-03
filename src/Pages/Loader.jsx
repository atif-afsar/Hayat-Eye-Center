import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-6">

        {/* EYE LOADER */}
        <div className="relative w-28 h-28 flex items-center justify-center">

          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-[5px]
                       border-green-500/30 border-t-blue-600"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />

          {/* Soft glow */}
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-gradient-to-r
                       from-green-400/30 to-blue-400/30 blur-xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* LOGO */}
          <motion.img
            src="/images/hayatLogo.png"
            alt="Hayat Eye Center Logo"
            className="w-12 h-12 object-contain z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.9,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* BRAND TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Hayat <span className="text-green-600">Eye</span>{" "}
            <span className="text-blue-600">Center</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Caring for Your Vision
          </p>
        </motion.div>

      </div>
    </div>
  );
}
