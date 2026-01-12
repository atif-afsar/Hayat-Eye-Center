import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getScrollTop = () => {
      const scroller = document.scrollingElement || document.documentElement;
      return scroller ? scroller.scrollTop : window.scrollY || 0;
    };

    const toggleVisibility = () => {
      setVisible(getScrollTop() > 300);
    };

    const onScroll = () => toggleVisibility();

    (document.scrollingElement || window).addEventListener("scroll", onScroll);
    // initial check
    toggleVisibility();
    return () => (document.scrollingElement || window).removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const scroller = document.scrollingElement || document.documentElement || document.body;
    if (scroller && scroller.scrollTo) {
      scroller.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full 
                     bg-blue-600 text-white shadow-lg flex items-center 
                     justify-center hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
