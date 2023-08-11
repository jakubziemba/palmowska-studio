import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './menu.module.scss';

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsMenuOpen(false));
    return () => router.events.off('routeChangeStart', () => setIsMenuOpen(false));
  }, [router.events, setIsMenuOpen]);

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/' className={styles.link}>
              Strona główna
            </Link>
          </li>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/projekty' className={styles.link}>
              Projekty
            </Link>
          </li>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/publikacje' className={styles.link}>
              Publikacje
            </Link>
          </li>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/wspolpraca' className={styles.link}>
              Współpraca
            </Link>
          </li>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/o-mnie' className={styles.link}>
              O mnie
            </Link>
          </li>
          <li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
            <Link href='/kontakt' className={styles.link}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
