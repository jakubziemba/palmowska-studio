import { useState } from 'react';
import { NavLink } from '../NavLink';
import styles from './styles.module.scss';
import { MenuButton } from './menuButton';
import Menu from '../Menu';

const links = [
  { path: '/projekty', label: 'Projekty' },
  { path: '/publikacje', label: 'Publikacje' },
  { path: '/wspolpraca', label: 'Współpraca' },
  { path: '/o-mnie', label: 'O mnie' },
  { path: '/kontakt', label: 'Kontakt' },
];

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
            {links.map(link => (
              <li key={link.path} className={styles.item}>
                <NavLink href={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
