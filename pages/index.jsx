import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ projects }) {
	const heading = 'Studio projektowania wnętrz';
	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					{heading.split(' ').map((word, index) => (
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
							key={index}
							className={styles.title}
						>
							{word}
						</motion.h1>
					))}
				</div>
				<motion.p
					className={styles.text}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					Każdy projekt jest kolejną, wyjątkową historią, którą tworzę razem z Klientem. Staram się
					odchodzić od chwilowych trendów na rzecz głębokiej refleksji przestrzennej i funkcjonalnej
					zgodnej z charakterem miejsca i sposobem życia mieszkańców. W kreowanych wnętrzach sięgam
					po niekonwencjonalne formy, kolory i faktury, tworząc niepowtarzalną atmosferę, która
					działa na wszystkie zmysły.
				</motion.p>
			</div>
			<div className={styles.projectsWrapper}>
				<div className={styles.projectsImages}>
					{projects.map((project, index) => {
						const thumbnail = project.fields.featuredImage.fields.file;
						const width = thumbnail.details.image.width;
						const height = thumbnail.details.image.height;

						return (
							<Link
								href={`/projekty/${project.fields.slug}`}
								key={project.fields.projectTitle}
								passHref
							>
								<a data-alt={project.fields.projectTitle}>
									<div
										data-alt={project.fields.projectTitle}
										className={styles.imageWrapper}
										style={{ gridColumn: width > height ? '1 / 3' : 'auto' }}
									>
										<Image
											src={`https:${thumbnail.url}`}
											width={width}
											height={height}
											alt={project.fields.projectTitle}
											quality={85}
											placeholder='blur'
											blurDataURL={`https:${thumbnail.url}?fm=jpg&fl=progressive`}
											loading='lazy'
										/>
										<div className={styles.overlay}></div>
									</div>
									<div className={styles.projectTitle}>
										<h3>{project.fields.projectTitle}</h3>
									</div>
								</a>
							</Link>
						);
					})}
				</div>
				<div className={styles.allProjects}>
					<Link href='/projekty'>Zobacz wszystkie projekty</Link>
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const { items } = await client.getEntries({
		content_type: 'projectLink',
	});

	return {
		props: { projects: items },
	};
}