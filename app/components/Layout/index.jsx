"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Nav from "../Nav";
import Footer from "../Footer";
import ScrollUpButton from "../ui/global/ScrollUpButton";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.wrapper}>
      <Nav />
      <motion.main
        className={styles.main}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.6 }}
      >
        {children}
        <ScrollUpButton />
      </motion.main>
      <Footer />
    </div>
  );
}
