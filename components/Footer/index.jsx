import styles from './styles.module.scss';

export default function Footer() {
	return (
		<footer className={styles.container}>
			<a href='https://instagram.com/saintjcob' target='_blank' rel='noopener noreferrer'>
				Powered by @saintjcob
			</a>
		</footer>
	);
}
