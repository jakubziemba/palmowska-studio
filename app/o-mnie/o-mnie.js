'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion } from 'framer-motion';
import styles from './omnie.module.scss';
import Shape2 from '../../public/svg/shape-2.svg';
import MyImage from '../../components/MyImage';

const RICHTEXT_OPTIONS = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export default function About({ data }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} />
      <div className={styles.wrapper}>
        <h1>Hej, poznajmy się!</h1>
        <div className={styles.content}>
          <MyImage
            className={styles.portrait}
            src={`https:${data.aboutImage.fields.file.url}`}
            width={data.aboutImage.fields.file.details.image.width}
            height={data.aboutImage.fields.file.details.image.height}
            priority={true}
            loading='eager'
            placeholder='blur'
            blurDataURL={`https:${data.aboutImage.fields.file.url}?fl=progressive`}
            alt='An image of me'
            quality={80}
          />
          <div className={styles.description}>
            {documentToReactComponents(data.aboutDescription, RICHTEXT_OPTIONS)}
            <MyImage
              src={`https:${data.signature.fields.file.url}`}
              width={data.signature.fields.file.details.image.width}
              height={data.signature.fields.file.details.image.height}
              alt='signature'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
