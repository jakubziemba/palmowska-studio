import { motion, useScroll } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { buttonVariants } from "./motion";

const ScrollUpButton = () => {
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
    // reset scroll position
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={`fixed bottom-4 right-4 z-50 rounded-full bg-white p-4 shadow-sm ${
        isVisible ? "visible opacity-90" : "invisible opacity-0"
      }`}
      variants={buttonVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp className="h-6 w-6" />
    </motion.button>
  );
};

export default ScrollUpButton;
