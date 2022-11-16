import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

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
						<Link href='/' className={styles.link} passHref>
							<a className={styles.link}>Strona główna</a>
						</Link>
					</li>
					<li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
						<Link href='/projekty' className={styles.link} passHref>
							<a className={styles.link}>Projekty</a>
						</Link>
					</li>
					<li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
						<Link href='/publikacje' className={styles.link} passHref>
							<a className={styles.link}>Publikacje</a>
						</Link>
					</li>
					<li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
						<Link href='/o-mnie' className={styles.link} passHref>
							<a className={styles.link}>O mnie</a>
						</Link>
					</li>
					<li className={styles.item} onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
						<Link href='/kontakt' className={styles.link} passHref>
							<a className={styles.link}>Kontakt</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
