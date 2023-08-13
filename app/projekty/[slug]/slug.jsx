'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
import styles from './slug.module.scss';
import Image from 'next/image';
import MyImage from '../../../components/MyImage';

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

  const variants = {
    animate: {
      objectPosition: ['40% 35%', '40% 65%', '40% 35%'],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={`https:${projectCover.url}?fm=webp`}
        width={projectCover.details.image.width}
        height={projectCover.details.image.height}
        alt={projectName}
        quality={85}
        priority={true}
        sizes='(max-width: 480px) 100vw,(max-width: 600px) 100vw, (max-width: 768px) 100vw, 100vw'
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
                <MyImage
                  key={file.fileName}
                  src={`https://${file.url}?fm=webp&q=80`}
                  width={width}
                  height={height}
                  alt={projectName}
                  quality={80}
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
