import { useState, useEffect } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-3 md:p-4 bg-primary text-primary-foreground rounded-full shadow-2xl transition-shadow duration-300 hover:shadow-primary/50"
          aria-label="Back to top"
        >
          <ArrowUp weight="bold" className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
