import Link from 'next/link';
import styles from './styles.module.scss';

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
	return (
		<div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
			<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link href='#' className={styles.link}>
							Strona główna
						</Link>
					</li>
					<li className={styles.item}>
						<Link href='#' className={styles.link}>
							Projekty
						</Link>
					</li>
					<li className={styles.item}>
						<Link href='#' className={styles.link}>
							Publikacje
						</Link>
					</li>
					<li className={styles.item}>
						<Link href='#' className={styles.link}>
							O mnie
						</Link>
					</li>
					<li className={styles.item}>
						<Link href='#' className={styles.link}>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
