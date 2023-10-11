'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './projekty.module.scss';
import Shape4 from '../../public/svg/shape-4.svg';
import MyImage from '../components/MyImage';
import { useState, useEffect } from 'react';

export default function Projekty({ projects }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <Shape4 className={`${styles.shape1brown} ${styles.shape}`} /> */}
      <div className={styles.heading}>
        <h1>Projekty</h1>
        <p>
          Biel jest podstawą każdej mojej kreacji i doskonałym tłem dla uwielbianych przeze mnie
          wyrazistych pomysłów, nadających wnętrzom osobisty charakter i ponadczasowy wymiar.
          Przestrzenie, które kreuję to połączenie nowoczesnych rozwiązań z klasyczną
          powściągliwością, będącą ukłonem w stronę estetyki minionego wieku.
        </p>
      </div>
      <div className={styles.images}>
        {projects.map((project, index) => {
          const {
            slug,
            projectName,
            thumbnail: { fields: thumbnail },
          } = project;

          return (
            <Link className={styles.project} href={`/projekty/${slug}`} key={slug} passHref>
              <div className={styles.imageWrapper}>
                <MyImage
                  src={`https:${thumbnail.file.url}?fm=webp`}
                  width={thumbnail.file.details.image.width}
                  height={thumbnail.file.details.image.height}
                  alt={projectName}
                  quality={45}
                  placeholder='blur'
                  blurDataURL={`https:${thumbnail.file.url}?w=20&fl=progressive&q=10`}
                  priority={isMobile && index === 0}
                  loading={isMobile && index === 0 ? 'eager' : 'lazy'}
                />
                <div className={styles.overlay}></div>
                <h3>{projectName}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
