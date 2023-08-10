import { createClient } from 'contentful';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Shape1 from '../public/svg/shape-1.svg';
import Shape2 from '../public/svg/shape-2.svg';
import Shape3 from '../public/svg/shape-3.svg';
import Shape4 from '../public/svg/shape-4.svg';
import styles from './homepage.module.scss';
import MyImage from '../components/MyImage';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ projects }) {
  projects.sort((a, b) => a.fields.id - b.fields.id);

  const heading = 'Studio projektowania wnętrz';
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <Shape1 className={`${styles.shape1blue} ${styles.shape}`} /> */}
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} />
      <div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.6 }}
        className={styles.wrapper}
      >
        <div className={styles.title}>
          <motion.h1
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: index * 0.15 }}
            className={styles.title}
          >
            {heading.split(' ').map((word, index) => (
              <span key={index}>{word} </span>
            ))}
          </motion.h1>
        </div>
        <motion.p
          className={styles.text}
          // initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5, delay: 0.5 }}
        >
          Każdy projekt jest kolejną, wyjątkową historią, którą tworzę razem z Klientem. Staram się
          odchodzić od chwilowych trendów na rzecz głębokiej refleksji przestrzennej i funkcjonalnej
          zgodnej z charakterem miejsca i sposobem życia mieszkańców. W kreowanych wnętrzach sięgam
          po niekonwencjonalne formy, kolory i faktury, tworząc niepowtarzalną atmosferę, która
          działa na wszystkie zmysły.
        </motion.p>
        <Link className={styles.button} href='/o-mnie' passHref>
          Dowiedz się więcej
        </Link>
      </div>
      <div className={styles.projectsWrapper}>
        {/* <Shape4 className={`${styles.shape1brown} ${styles.shape}`} /> */}
        {/* <Shape3 className={`${styles.shape3green} ${styles.shape}`} /> */}
        <div className={styles.projectsImages}>
          {projects.map((project, index) => {
            const id = project.fields.id;
            const thumbnail = project.fields.featuredImage.fields.file;
            const width = thumbnail.details.image.width;
            const height = thumbnail.details.image.height;

            return (
              <Link
                href={`/projekty/${project.fields.slug}`}
                key={project.fields.projectTitle}
                data-alt={project.fields.projectTitle}
              >
                <div
                  className={styles.imageWrapper}
                  data-alt={project.fields.projectTitle}
                  style={{ gridColumn: width > height ? '1 / 3' : 'auto' }}
                >
                  <MyImage
                    src={`https:${thumbnail.url}?w=800`}
                    width={width}
                    height={height}
                    alt={project.fields.projectTitle}
                    quality={75}
                    placeholder='blur'
                    blurDataURL={`https:${thumbnail.url}?w=20&fl=progressive&q=10`}
                    loading='lazy'
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.projectTitle}>
                  <h2>{project.fields.projectTitle}</h2>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.allProjects}>
          <Link className={styles.button} href='/projekty'>
            Zobacz wszystkie projekty
          </Link>
        </div>
      </div>
    </motion.section>
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
