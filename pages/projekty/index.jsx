import { createClient } from 'contentful';
import Image from "next/legacy/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './projekty.module.scss';
import Shape1 from '../../public/svg/shape-1.svg';
import Shape2 from '../../public/svg/shape-2.svg';
import Shape3 from '../../public/svg/shape-3.svg';
import Shape4 from '../../public/svg/shape-4.svg';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Projekty({ projects }) {
  const sorted = projects.sort((a, b) => b.id - a.id);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Shape4 className={`${styles.shape1brown} ${styles.shape}`} />
      {/* <Shape3 className={`${styles.shape3green} ${styles.shape}`} />
      <Shape1 className={`${styles.shape1blue} ${styles.shape}`} />
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} /> */}
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
        {sorted.map(project => {
          const { slug, projectName } = project;
          const thumbnail = project.thumbnail.fields;

          return (
            <Link className={styles.project} href={`/projekty/${slug}`} key={slug} passHref>
              <div className={styles.imageWrapper}>
                <Image
                  src={`https:${thumbnail.file.url}`}
                  width={thumbnail.file.details.image.width}
                  height={thumbnail.file.details.image.height}
                  alt={projectName}
                  quality={45}
                  placeholder='blur'
                  blurDataURL={`https:${thumbnail.file.url}?w=20&fl=progressive&q=10`}
                  loading='lazy'
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

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'project',
  });

  const projects = items.map(({ fields }) => ({
    id: fields.id,
    slug: fields.slug,
    projectName: fields.projectName,
    thumbnail: fields.thumbnail,
  }));

  return {
    props: { projects },
  };
}
