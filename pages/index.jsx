import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './homepage.module.scss';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ projects }) {
  const heading = 'Studio projektowania wnętrz';
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={styles.wrapper}
      >
        <div className={styles.title}>
          {heading.split(' ').map((word, index) => (
            <motion.h1
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className={styles.title}
            >
              {word}
            </motion.h1>
          ))}
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
        <Link href='/o-mnie' passHref>
          <a className={styles.button}>Dowiedz się więcej</a>
        </Link>
      </motion.div>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsImages}>
          {projects.map((project, index) => {
            const thumbnail = project.fields.featuredImage.fields.file;
            const width = thumbnail.details.image.width;
            const height = thumbnail.details.image.height;

            return (
              <Link
                href={`/projekty/${project.fields.slug}`}
                key={project.fields.projectTitle}
                passHref
              >
                <a data-alt={project.fields.projectTitle}>
                  <div
                    className={styles.imageWrapper}
                    data-alt={project.fields.projectTitle}
                    style={{ gridColumn: width > height ? '1 / 3' : 'auto' }}
                  >
                    <Image
                      src={`https:${thumbnail.url}`}
                      width={width}
                      height={height}
                      alt={project.fields.projectTitle}
                      quality={45}
                      placeholder='blur'
                      blurDataURL={`https:${thumbnail.url}?fm=webp&fl=progressive`}
                      loading='lazy'
                    />
                    <div className={styles.overlay}></div>
                  </div>
                  <div className={styles.projectTitle}>
                    <h2>{project.fields.projectTitle}</h2>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <div className={styles.allProjects}>
          <Link href='/projekty' passHref>
            <a className={styles.button}>Zobacz wszystkie projekty</a>
          </Link>
        </div>
      </div>
    </section>
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
