import { use } from 'react';
import Image from 'next/image';
import { fetchAssets } from '../../../util/contentfulPosts';
import styles from './styles.module.scss';

async function getData() {
	const res = await fetchAssets();
	const mappedData = await res.map(item => item.fields);
	return mappedData;
}

export default async function HomeProjects() {
	const data = await getData();
	const mappedData = data.map(item => {
		console.log(item.file);
	});
	console.log(mappedData);

	const imageLoader = ({ src, width, quality }) => {
		return `https://${src}`;
	};

	return (
		<div>
			<h1>Projekty</h1>
			<div>
				{data.map((item, index) => {
					const { title, file } = item;
					return (
						<div key={index}>
							<h2>{title}</h2>
							<Image
								loader={imageLoader}
								// src={`https:${file.url}`}
								width={file.details.image.width / 4}
								height={file.details.image.height / 4}
								alt={file.fileName}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
