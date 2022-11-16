import styles from './styles.module.scss';

export default function Publikacje() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1>Publikacje</h1>
				<div className={styles.content}>
					<div className={styles.publication}>Label Magazine</div>
					{/* <div className={styles.listWrapper}></div> */}
					<div className={styles.publication}>Elle Decoration</div>
					<div className={styles.publication}>Whitemad Magazine</div>
					<div className={styles.publication}>Design Alive</div>
					<div className={styles.publication}>Internity Home</div>
				</div>
			</div>
		</div>
	);
}
