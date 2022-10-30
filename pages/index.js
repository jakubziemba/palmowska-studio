import Image from 'next/future/image';
import fetchEntries from '../util/contentfulPosts';
import styles from './page.module.scss';

export default function Home({ posts }) {
	// console.log(posts);
	const projectData = posts[2].images;

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				{/* {posts.map(post => (
					<h1 key={post.slug} className={styles.title}>
						{post.projectName}
					</h1>
				))} */}
				<h1 className={styles.title}>{posts[0].projectName}</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod quia quae voluptas
					quas voluptates quibusdam lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam quod quia quae voluptas quas voluptates quibusdam
				</p>
			</div>
			<div className={styles.projects}>
				<h1 className={styles.title}>Projekty</h1>
				<div className={styles.projectsImages}>
					{projectData.map((item, index) => {
						const { file } = item.fields;
						const width = file.details.image.width;
						const height = file.details.image.height;

						return (
							<div
								key={index}
								className={styles.imageWrapper}
								style={{ gridColumn: width > height ? '1 / 3' : 'auto' }}
							>
								<Image
									src={`https:${file.url}`}
									width={width}
									height={height}
									alt={file.fileName}
									quality={85}
									placeholder='blur'
									blurDataURL={`https:${file.url}?fm=jpg&fl=progressive`}
									loading='lazy'
								/>
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
