"use client";

import { motion } from "framer-motion";
import Nav from "../Nav";
import Footer from "../Footer";
import ScrollUpButton from "../ui/global/ScrollUpButton";
import styles from "./styles.module.scss";
import { LenisScroller } from "./LenisScroller";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <motion.main
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, onAnimationEnd: () => window.scrollTo(0, 0) }}
        transition={{ duration: 0.6 }}
      >
        {children}
        <ScrollUpButton />
      </motion.main>
      <Footer />
      <LenisScroller />
    </div>
  );
}
