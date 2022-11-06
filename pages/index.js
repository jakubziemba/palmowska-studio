import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from './page.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ projects }) {
	// console.log(projects);

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				{/* {posts.map(post => (
					<h1 key={post.slug} className={styles.title}>
						{post.projectName}
					</h1>
				))} */}
				{/* <h1 className={styles.title}>{posts[0].projectName}</h1> */}
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod quia quae voluptas
					quas voluptates quibusdam lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam quod quia quae voluptas quas voluptates quibusdam
				</p>
			</div>
			<div>
				<h1 className={styles.title}>Projekty</h1>
				<div className={styles.projectsImages}>
					{projects.map((project, index) => {
						const thumbnail = project.fields.thumbnail.fields.file;
						const width = thumbnail.details.image.width;
						const height = thumbnail.details.image.height;

						return (
							<Link href={`/projekty/${project.fields.slug}`} key={index} passHref>
								<a data-alt={project.fields.projectName}>
									<div
										// key={index}
										data-alt={project.fields.projectName}
										className={styles.imageWrapper}
										style={{ gridColumn: width > height ? '1 / 3' : 'auto' }}
									>
										<Image
											src={`https:${thumbnail.url}`}
											width={width}
											height={height}
											alt={project.fields.projectName}
											quality={85}
											placeholder='blur'
											blurDataURL={`https:${thumbnail.url}?fm=jpg&fl=progressive`}
											loading='lazy'
										/>
									</div>
								</a>
							</Link>
						);
					})}
				</div>
				<div className={styles.allProjects}>
					<Link href='/projects'>Zobacz wszystkie projekty</Link>
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const { items } = await client.getEntries({
		content_type: 'project',
	});

	console.log(items);

	return {
		props: { projects: items },
	};
}
