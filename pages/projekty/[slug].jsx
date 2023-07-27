import { createClient } from 'contentful';
import Image from 'next/future/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
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
    projectCover,
    images,
  } = project;

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={`https:${projectCover.url}?fm=webp&w=1800&q=93`}
        width={projectCover.details.image.width}
        height={projectCover.details.image.height}
        placeholder='blur'
        blurDataURL={`https:${projectCover.url}?w=20&fl=progressive&q=10`}
        alt={`projectCover image for ${projectName} project`}
        loading='eager'
        quality={93}
        priority
      />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className={styles.heading}>{projectName}</h1>
          {apartment && (
            <>
              <p className={styles.subheading}>{apartment}</p>
            </>
          )}
        </div>
        <div className={styles.content}>
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
      </div>
      <div className={styles.projects}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='16px'>
            {images.map(item => {
              const { file } = item.fields;
              const width = file.details.image.width;
              const height = file.details.image.height;

              return (
                <Image
                  key={file.fileName}
                  src={`https:${file.url}`}
                  width={width}
                  height={height}
                  alt={file.fileName}
                  layout='responsive'
                  quality={85}
                  placeholder='blur'
                  blurDataURL={`https:${file.url}?w=20&fl=progressive&q=10`}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
        {/* </div> */}
      </div>
    </motion.section>
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
      apartment: fields?.apartment || null,
      location: fields?.location,
      livingArea: fields?.livingArea,
      projectBy: fields?.projectBy,
      date: fields?.date,
      photos: fields?.photos,
      thumbnail: fields?.thumbnail?.fields?.file,
      projectCover: fields?.projectCover?.fields?.file || fields?.thumbnail?.fields?.file,
      images: fields?.images,
    };
  });

  return {
    props: { project: projectData[0] },
  };
}
