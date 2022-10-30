import Nav from '../Nav';
import Footer from '../Footer';
import styles from './styles.module.scss';

export default function Layout({ children }) {
	return (
		<div className={styles.wrapper}>
			<Nav />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
}
