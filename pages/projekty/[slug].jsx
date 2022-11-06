import { createClient } from 'contentful';
import Image from 'next/future/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './slug.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Project({ project }) {
	// console.log(project);
	const { fields, sys } = project;
	const { projectName, projectDescription, images } = fields;
	console.log(fields, sys);

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>{projectName}</h1>
				{projectDescription && (
					<div className={styles.text}>{documentToReactComponents(projectDescription)}</div>
				)}
			</div>
			<div className={styles.projects}>
				<div className={styles.projectsImages}>
					{images.map((item, index) => {
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
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export async function getStaticPaths() {
	const res = await client.getEntries({ content_type: 'project' });

	const paths = res.items.map(item => {
		console.log(item);
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'project',
		'fields.slug': params.slug,
	});

	console.log(items);

	return {
		props: { project: items[0] },
	};
}
