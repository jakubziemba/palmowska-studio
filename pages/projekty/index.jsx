import { createClient } from 'contentful';
import Image from 'next/future/image';
import Link from 'next/link';
import styles from './projekty.module.scss';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Projekty({ projects }) {
  const sorted = projects.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.container}>
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
