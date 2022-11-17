import { createClient } from 'contentful';
import Image from 'next/future/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './slug.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Project({ project }) {
	const {
		projectName,
		apartment,
		location,
		livingArea,
		projectBy,
		date,
		photos,
		projectDescription,
		images,
	} = project;

	return (
		<section className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>{projectName}</h1>
				{apartment && (
					<>
						<p className={styles.text}>{apartment}</p>
					</>
				)}
				{location && (
					<>
						<p className={styles.textTitle}>Lokalizacja</p>
						<p className={styles.text}>{location}</p>
					</>
				)}
				{livingArea && (
					<>
						<p className={styles.textTitle}>Metraż</p>
						<p className={styles.text}>{livingArea}</p>
					</>
				)}
				{projectBy && (
					<>
						<p className={styles.textTitle}>Projekt</p>
						<p className={styles.text}>{projectBy}</p>
					</>
				)}
				{date && (
					<>
						<p className={styles.textTitle}>Data realizacji</p>
						<p className={styles.text}>{date}</p>
					</>
				)}
				{photos && (
					<>
						<p className={styles.textTitle}>Zdjęcia</p>
						<p className={styles.text}>{photos}</p>
					</>
				)}
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

	const projectData = items.map(({ fields }) => {
		return {
			id: fields?.id,
			projectName: fields?.projectName,
			apartment: fields?.apartment,
			location: fields?.location,
			livingArea: fields?.livingArea,
			projectBy: fields?.projectBy,
			date: fields?.date,
			photos: fields?.photos,
			images: fields?.images,
		};
	});

	return {
		props: { project: projectData[0] },
	};
}
