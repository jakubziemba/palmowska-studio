import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from './projekty.module.scss';
import Shape1blue from '../../public/svg/shape-1-blue.svg';
import Shape1brown from '../../public/svg/shape-1-brown.svg';
import Shape2pink from '../../public/svg/shape-2-pink.svg';
import Shape3green from '../../public/svg/shape-3-green.svg';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Projekty({ projects }) {
  const sorted = projects.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.container}>
      <Shape1brown className={`${styles.shape1brown} ${styles.shape}`} />
      <Shape3green className={`${styles.shape3green} ${styles.shape}`} />
      <Shape1blue className={`${styles.shape1blue} ${styles.shape}`} />
      <Shape2pink className={`${styles.shape2pink} ${styles.shape}`} />
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
            <Link href={`/projekty/${slug}`} key={slug}>
              <a className={styles.project}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`https:${thumbnail.file.url}`}
                    width={thumbnail.file.details.image.width}
                    height={thumbnail.file.details.image.height}
                    alt={projectName}
                    quality={85}
                    loading='lazy'
                    blurDataURL={`https:${thumbnail.file.url}?fm=jpg&fl=progressive`}
                  />
                  <div className={styles.overlay}></div>
                  <h3>{projectName}</h3>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
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
