import Image from 'next/image';
import fetchEntries from '../util/contentfulPosts';
import styles from './page.module.scss';

export default function Home({ posts }) {
	// console.log(posts);
	const imageData = posts[1].images;
	console.log(imageData);

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>{posts[0].projectName}</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod quia quae voluptas
					quas voluptates quibusdam lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam quod quia quae voluptas quas voluptates quibusdam
				</p>
			</div>
			<div className={styles.projects}>
				<h1>Projekty</h1>
				<div className={styles.projectsImages}>
					{imageData.map((item, index) => {
						const { file } = item.fields;
						return (
							<div key={index}>
								<div className={styles.imageWrapper}>
									<Image
										src={`https:${file.url}`}
										width={file.details.image.width}
										height={file.details.image.height}
										alt={file.fileName}
										quality={90}
										objectFit='contain'
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const res = await fetchEntries();
	const posts = await res.map(p => {
		return p.fields;
	});

	return {
		props: {
			posts,
		},
	};
}
