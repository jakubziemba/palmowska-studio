import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import styles from './omnie.module.scss';
import Shape1 from '../../public/svg/shape-1.svg';
import Shape2 from '../../public/svg/shape-2.svg';
import Shape3 from '../../public/svg/shape-3.svg';
import Shape4 from '../../public/svg/shape-4.svg';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const RICHTEXT_OPTIONS = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export default function About({ data }) {
  return (
    <div className={styles.container}>
      {/* <Shape3 className={`${styles.shape3green} ${styles.shape}`} />
      <Shape4 className={`${styles.shape4brown} ${styles.shape}`} />
      <Shape1 className={`${styles.shape1blue} ${styles.shape}`} /> */}
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} />
      <div className={styles.wrapper}>
        <h1>Hej, poznajmy się!</h1>
        <div className={styles.content}>
          <Image
            className={styles.portrait}
            src={`https:${data.aboutImage.fields.file.url}`}
            width={data.aboutImage.fields.file.details.image.width}
            height={data.aboutImage.fields.file.details.image.height}
            loading='eager'
            placeholder='blur'
            blurDataURL={`https:${data.aboutImage.fields.file.url}?fl=progressive`}
            alt='An image of me'
            quality={100}
          />
          <div className={styles.description}>
            {documentToReactComponents(data.aboutDescription, RICHTEXT_OPTIONS)}
            <Image
              src={`https:${data.signature.fields.file.url}`}
              width={data.signature.fields.file.details.image.width}
              height={data.signature.fields.file.details.image.height}
              alt='signature'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'aboutMe',
  });

  return {
    props: { data: items[0].fields },
  };
}
