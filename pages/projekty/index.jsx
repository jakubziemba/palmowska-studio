import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from './index.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Projekty({ projects }) {
	const [projectData, setProjectData] = useState(projects);

	// const [projectsList, setProjectsList] = useState([]);
	// console.log(projects);
	// console.log(projectData);

	// useEffect(() => {
	// 	projectData.map(project => {
	// 		setProjectData(prev => [...prev, project]);
	// 		// setProjectData(prev => [...prev, project.fields]);
	// 	});
	// 	// projectData.sort((a, b) => a.id - b.id);
	// 	// console.log(projectData);
	// }, []);

	return (
		<div className={styles.container}>
			<h1>Projekty</h1>
			<div className={styles.images}>
				{projects.map(project => {
					const thumbnail = project.fields.thumbnail.fields;

					return (
						<Link href={`/projekty/${project.fields.slug}`} key={project.fields.slug}>
							<a className={styles.project}>
								<div className={styles.imageWrapper}>
									<Image
										src={`https:${thumbnail.file.url}`}
										width={thumbnail.file.details.image.width}
										height={thumbnail.file.details.image.height}
										alt={project.fields.projectName}
										quality={90}
										loading='lazy'
										blurDataURL={`https:${thumbnail.file.url}?fm=jpg&fl=progressive`}
									/>
									<h3>{project.fields.projectName}</h3>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const { items } = await client.getEntries({
		content_type: 'project',
	});

	return {
		props: { projects: items },
	};
}
