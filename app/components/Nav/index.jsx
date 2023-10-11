"use client";

import { useState } from "react";
import { NavLink } from "./NavLink";
import styles from "./styles.module.scss";
import { MenuButton } from "./menuButton";
import Menu from "../Menu";
import Logo from "./Logo";
import { AnimatePresence } from "framer-motion";

const links = [
  { path: "/projekty", label: "Projekty" },
  { path: "/publikacje", label: "Publikacje" },
  { path: "/wspolpraca", label: "Współpraca" },
  { path: "/o-mnie", label: "O mnie" },
  { path: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <NavLink href="/">
            <Logo className="h-16 w-8 lg:h-20" width={24} height={75} />
          </NavLink>
        </div>
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link.path} className={styles.item}>
                  <NavLink href={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </AnimatePresence>
      </div>
    </header>
  );
}
