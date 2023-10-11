'use client';

import { useEffect } from 'react';
import styles from './styles.module.scss';

export const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
      onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
