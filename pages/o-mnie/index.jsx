import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/future/image';
import styles from './styles.module.scss';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function About({ data }) {
	console.log(data);

	return (
		<div className={styles.container}>
			<h1>Cześć!</h1>
			{/* <div className={styles.content}> */}
			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas placeat eum. Eaque
				aliquid numquam eius! Sequi, non quaerat. Vitae perspiciatis aut ratione harum cum voluptate
				asperiores magnam iure non! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Placeat, necessitatibus officia atque quis veritatis, expedita cupiditate, reprehenderit
				omnis facere quaerat dolor! Accusamus assumenda ipsam tempore aliquam repudiandae magni
				velit maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas
				placeat eum. Eaque aliquid numquam eius! Sequi, non quaerat. Vitae perspiciatis aut ratione
				harum cum voluptate asperiores magnam iure non! Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Placeat, necessitatibus officia atque quis veritatis, expedita cupiditate,
				reprehenderit omnis facere quaerat dolor! Accusamus assumenda ipsam tempore aliquam
				repudiandae magni velit maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid voluptas placeat eum. Eaque aliquid numquam eius! Sequi, non quaerat. Vitae
				perspiciatis aut ratione harum cum voluptate asperiores magnam iure non! Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Placeat, necessitatibus officia atque quis
				veritatis, expedita cupiditate, reprehenderit omnis facere quaerat dolor! Accusamus
				assumenda ipsam tempore aliquam repudiandae magni velit maxime? Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Aliquid voluptas placeat eum. Eaque aliquid numquam eius!
			</p>
			<Image
				src={`https:${data.aboutImage.fields.file.url}`}
				width={data.aboutImage.fields.file.details.image.width}
				height={data.aboutImage.fields.file.details.image.height}
				loading='eager'
				placeholder='blur'
				blurDataURL={`https:${data.aboutImage.fields.file.url}?fm=jpg&fl=progressive`}
				alt='An image of me'
				quality={100}
			/>
			{/* </div> */}
		</div>
	);
}

export async function getStaticProps() {
	const { items } = await client.getEntries({
		content_type: 'aboutMe',
	});

	console.log(items);

	return {
		props: { data: items[0].fields },
	};
}
