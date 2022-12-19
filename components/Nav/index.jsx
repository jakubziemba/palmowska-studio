import { useState } from 'react';
import { NavLink } from '../NavLink';
import styles from './styles.module.scss';
import { MenuButton } from './menuButton';
import Menu from '../Menu';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink href='/'>Kamila Palmowska</NavLink>
        </div>
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink href='/projekty'>Projekty</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink href='/publikacje'>Publikacje</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink href='/wspolpraca'>Współpraca</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink href='/o-mnie'>O mnie</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink href='/kontakt'>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
