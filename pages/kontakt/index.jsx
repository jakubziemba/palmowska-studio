import Image from 'next/future/image';
import styles from './styles.module.scss';
import Shape1 from '../../public/svg/shape-1.svg';
import Shape2 from '../../public/svg/shape-2.svg';
import Shape3 from '../../public/svg/shape-3.svg';
import Shape4 from '../../public/svg/shape-4.svg';

export default function Kontakt() {
  return (
    <div className={styles.container}>
      <Shape3 className={`${styles.shape3green} ${styles.shape}`} />
      <Shape4 className={`${styles.shape4brown} ${styles.shape}`} />
      <Shape1 className={`${styles.shape1blue} ${styles.shape}`} />
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} />
      <div className={styles.wrapper}>
        <h1>Kontakt</h1>
        <div className={styles.content}>
          <p>
            Chcesz skonsultować lub wycenić pomysł? A może dowiedzieć się jak pracuję? <br />
            Chętnie doradzę, skonsultuję Twój projekt i opowiem o współpracy.
          </p>
          <div className={styles.links}>
            <p>
              <span>Email:</span>{' '}
              <a href='mailto:hello@kamilapalmowska.com'>hello@kamilapalmowska.com</a>
            </p>
            <p>
              <span>Telefon:</span> <a href='tel:+48 600 897 821'>+48 600 897 821</a>
            </p>
            <p>
              <span>Instagram:</span>{' '}
              <a href='https://www.instagram.com/palmowska__studio'>@palmowska__studio</a>
            </p>
            <p>
              <span>Facebook:</span>{' '}
              <a href='https://www.facebook.com/profile.php?id=100087842247172'>
                Kamila Palmowska Studio
              </a>
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src='/me2.jpg' width='1000' height='1500' alt='Kamila Palmowska' quality='80' />
        </div>
      </div>
    </div>
  );
}
