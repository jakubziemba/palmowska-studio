import Link from 'next/link';
import styles from './publikacje.module.scss';
import Shape1 from '../../public/svg/shape-1.svg';
import Shape2 from '../../public/svg/shape-2.svg';
import Shape3 from '../../public/svg/shape-3.svg';
import Shape4 from '../../public/svg/shape-4.svg';

export default function Publikacje() {
  return (
    <div className={styles.container}>
      <Shape3 className={`${styles.shape3green} ${styles.shape}`} />
      {/* <Shape4 className={`${styles.shape4brown} ${styles.shape}`} />
      <Shape1 className={`${styles.shape1blue} ${styles.shape}`} />
      <Shape2 className={`${styles.shape2pink} ${styles.shape}`} /> */}
      <div className={styles.wrapper}>
        <h1>Publikacje</h1>
        <div className={styles.content}>
          <div className={styles.publication}>
            <h2>
              <span>01</span>Label Magazine
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <a href='https://label-magazine.com/wnetrza/artykuly/mikrokawalerka-jak-urzadzic-bardzo-mala-przestrzen'>
                    Mikrokawalerka – jak urządzić bardzo małą przestrzeń?
                  </a>
                </li>
                <li>
                  <a href='https://label-magazine.com/wnetrza/artykuly/male-mieszkanie-duza-kreatywnosc'>
                    Małe mieszkanie, duża kreatywność
                  </a>
                </li>
                <li>
                  <a href='https://label-magazine.com/wnetrza/artykuly/mieszkanie-na-warszawskim-mokotowie'>
                    Klimatyczne mieszkanie na warszawskim Mokotowie
                  </a>
                </li>
                <li>
                  <a href='https://label-magazine.com/wnetrza/artykuly/w-warszawskiej-kamienicy-z-1890-roku'>
                    W warszawskiej kamienicy z 1890 roku
                  </a>
                </li>
                <li>
                  <a href='https://label-magazine.com/wnetrza/artykuly/flower-power-morr'>
                    Flower Power!
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>02</span>Elle Decoration
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/kolory-i-etro-szyk-w-mieszkaniu-na-warszawskim-mokotowie'>
                    Kolory i retro szyk w mieszkaniu na warszawskim Mokotowie
                  </a>
                </li>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/blekity-we-wnetrzu-na-zlotej-mieszkanie-w-centrum-warszawy'>
                    Błękity we wnętrzu na Złotej. Mieszkanie w centrum Warszawy
                  </a>
                </li>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/sypialnia-na-antresoli-mieszkanie-w-centrum-warszawy'>
                    Biel, kolory, sypialnia na antresoli. Mieszkanie w centrum Warszawy
                  </a>
                </li>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/kawalerka-z-antresola-w-warszawie'>
                    Kawalerka z antresolą w Warszawie
                  </a>
                </li>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/flower-power-na-44-metrach-kwadratowych-w-centrum-warszawy'>
                    Flower Power na 44 metrach kwadratowych w centrum Warszawy
                  </a>
                </li>
                <li>
                  <a href='https://www.elle.pl/decoration/artykul/wnetrze-tygodnia-delikatne-nieieskosci-w-mieszkaniu-na-warszawskim-mokotowie'>
                    Wnętrze tygodnia: delikatne niebieskości w mieszkaniu na warszawskim Mokotowie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>03</span>WhiteMAD Magazine
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <a href='https://www.whitemad.pl/mieszkanie-w-sercu-warszawy-morr'>
                    Mieszkanie w sercu Warszawy. Tu ciekawy design spotyka się z funkcjonalnością!
                  </a>
                </li>
                <li>
                  <a href='https://www.whitemad.pl/klimatyczne-mieszkanie-na-mokotowie'>
                    Klimatyczne mieszkanie na Mokotowie. Ma 37 metrów kwadratowych!
                  </a>
                </li>
                <li>
                  <a href='https://www.whitemad.pl/kawalerka-w-warszawskiej-kamienicy'>
                    23-metrowa kawalerka w warszawskiej kamienicy z 1890 roku
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>04</span>Design Alive
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <a href='https://www.designalive.pl/tam-gdzie-mieszka-kolor/'>
                    Kiedy mniej znaczy więcej
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>05</span>Internity Home
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <a href='https://internityhome.pl/inspiracje/realizacje/mikrokawalerka-z-antresola-pelna-kolorow-i-ciekawych-rozwiazan/'>
                    Mikrokawalerka z antresolą pełna kolorów i ciekawych rozwiązań
                  </a>
                </li>
                <li>
                  <a href='https://internityhome.pl/odkrywaj/triki-architektek-z-morr-studio-ulatwiajace-zycie-w-malym-mieszkaniu'>
                    Triki architektek z MORR Studio ułatwiające życie w małym mieszkaniu
                  </a>
                </li>
                <li>
                  <a href='https://internityhome.pl/inspiracje/realizacje/mieszkanie-kamienicy-1890-pelne-zaskakujacych-rozwiazan'>
                    Mieszkanie w kamienicy z 1890 roku pełne zaskakujących rozwiązań
                  </a>
                </li>
                <li>
                  <a href='https://internityhome.pl/inspiracje/realizacje/nowoczesny-vintage-morr-studio'>
                    Nowoczesny vintage na 37 metrach kw. (proj. Morr Studio)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
