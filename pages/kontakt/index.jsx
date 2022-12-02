import styles from './styles.module.scss';

export default function Kontakt() {
  return (
    <div className={styles.container}>
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
        </div>
      </div>
    </div>
  );
}
