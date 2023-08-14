'use client';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>
          KAMILA PALMOWSKA <br />© 2022 - All rights reserved.
        </div>
        <div className={styles.contact}>
          <a href='mailto:hello@kamilapalmowska.com'>hello@kamilapalmowska.com</a>
          <a href='tel:+48 600 897 821'>+48 600 897 821</a>
        </div>
        <div className={styles.socialMedia}>
          <a href='https://www.instagram.com/palmowska__studio'>Instagram</a>
          <a href='https://www.pinterest.com/kpalmowska'>Pinterest</a>
          <a href='https://www.facebook.com/profile.php?id=100087842247172'>Facebook</a>
        </div>
      </div>
    </footer>
  );
}
