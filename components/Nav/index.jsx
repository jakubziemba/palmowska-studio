import { NavLink } from '../NavLink';
import styles from './styles.module.scss';

export default function Nav() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<NavLink href='/'>Kamila Palmowska</NavLink>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink href='/projekty'>Projekty</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink href='/publikacje'>Publikacje</NavLink>
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
