"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import styles from "./menu.module.scss";
import { menuHeight, translate } from "./anim";

const menuItems = [
  { link: "/", text: "Strona główna" },
  { link: "/projekty", text: "Projekty" },
  { link: "/publikacje", text: "Publikacje" },
  { link: "/wspolpraca", text: "Współpraca" },
  { link: "/o-mnie", text: "O mnie" },
  { link: "/kontakt", text: "Kontakt" },
];

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  return (
    <motion.div
      variants={menuHeight}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute right-0 top-0 z-10 w-screen overflow-hidden bg-lightbrown lg:invisible lg:hidden"
    >
      <AnimatePresence mode="wait">
        <ul className="flex h-full list-none flex-col items-center justify-center px-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="my-4 overflow-hidden font-sans text-lg font-normal tracking-tight text-black"
              onClick={toggleMenu}
            >
              <Link href={item.link} className="flex" passHref>
                <motion.span
                  className="flex"
                  custom={index}
                  variants={translate}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {item.text}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </AnimatePresence>
    </motion.div>
  );
}
