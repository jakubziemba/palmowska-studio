"use client";

import Link from "next/link";
import styles from "./publikacje.module.scss";
import { motion } from "framer-motion";

export default function Publikacje() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <Shape3 className={`${styles.shape3green} ${styles.shape}`} /> */}
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
                  <Link href="https://label-magazine.com/wnetrza/artykuly/zielona-przystan-przytulne-mieszkanie-mlodego-malzenstwa-z-dzieckiem">
                    Zielona przystań. Przytulne mieszkanie młodego małżeństwa z
                    dzieckiem
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/nadwislanska-harmonia-w-krakowie">
                    Nadwiślańska harmonia w Krakowie – mieszkanie w kolorach
                    ziemi
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/kancelaria-prawna">
                    Kancelaria prawna, w której połączono vintage i współczesny
                    dizajn
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/historyczne-wnetrze-w-nowym-wydaniu">
                    Historyczne wnętrze w nowym wydaniu. Odwiedzamy warszawską
                    kamienicę z 1890 roku
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/mikrokawalerka-jak-urzadzic-bardzo-mala-przestrzen">
                    Mikrokawalerka – jak urządzić bardzo małą przestrzeń?
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/male-mieszkanie-duza-kreatywnosc">
                    Małe mieszkanie, duża kreatywność
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/mieszkanie-na-warszawskim-mokotowie">
                    Klimatyczne mieszkanie na warszawskim Mokotowie
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/w-warszawskiej-kamienicy-z-1890-roku">
                    W warszawskiej kamienicy z 1890 roku
                  </Link>
                </li>
                <li>
                  <Link href="https://label-magazine.com/wnetrza/artykuly/flower-power-morr">
                    Flower Power!
                  </Link>
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
                  <Link href="https://www.elle.pl/decoration/artykul/dwupoziomowe-mieszkanie-w-krakowie-miks-japandi-i-elegancji-rodem-z-kamienicy-tak-mieszka-mlode-malzenstwo#dwupoziomowe-mieszkanie-w-krakowie-projekt-kamila-palmowska-12">
                    Dwupoziomowe mieszkanie w Krakowie. Miks japandi i elegancji
                    rodem z kamienicy - tak mieszka młode małżeństwo
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/nowoczesny-minimalizm-w-starej-kamienicy-w-srodku-klasyczna-jodelka-rozowy-stolik-kostka-i-piekne-kafle">
                    Nowoczesny minimalizm w starej kamienicy. W środku klasyczna
                    jodełka, różowy stolik kostka i piękne kafle
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/kolory-i-etro-szyk-w-mieszkaniu-na-warszawskim-mokotowie">
                    Kolory i retro szyk w mieszkaniu na warszawskim Mokotowie
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/blekity-we-wnetrzu-na-zlotej-mieszkanie-w-centrum-warszawy">
                    Błękity we wnętrzu na Złotej. Mieszkanie w centrum Warszawy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/sypialnia-na-antresoli-mieszkanie-w-centrum-warszawy">
                    Biel, kolory, sypialnia na antresoli. Mieszkanie w centrum
                    Warszawy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/kawalerka-z-antresola-w-warszawie">
                    Kawalerka z antresolą w Warszawie
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/flower-power-na-44-metrach-kwadratowych-w-centrum-warszawy">
                    Flower Power na 44 metrach kwadratowych w centrum Warszawy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.elle.pl/decoration/artykul/wnetrze-tygodnia-delikatne-nieieskosci-w-mieszkaniu-na-warszawskim-mokotowie">
                    Wnętrze tygodnia: delikatne niebieskości w mieszkaniu na
                    warszawskim Mokotowie
                  </Link>
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
                  <Link href="https://www.whitemad.pl/mieszkanie-w-sercu-warszawy-morr">
                    Mieszkanie w sercu Warszawy. Tu ciekawy design spotyka się z
                    funkcjonalnością!
                  </Link>
                </li>
                <li>
                  <Link href="https://www.whitemad.pl/klimatyczne-mieszkanie-na-mokotowie">
                    Klimatyczne mieszkanie na Mokotowie. Ma 37 metrów
                    kwadratowych!
                  </Link>
                </li>
                <li>
                  <Link href="https://www.whitemad.pl/kawalerka-w-warszawskiej-kamienicy">
                    23-metrowa kawalerka w warszawskiej kamienicy z 1890 roku
                  </Link>
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
                  <Link href="https://www.designalive.pl/tam-gdzie-mieszka-kolor/">
                    Kiedy mniej znaczy więcej
                  </Link>
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
                  <Link href="https://internityhome.pl/inspiracje/realizacje/nadwislanska-harmonia-w-80-metrowym-mieszkaniu-proj-kamila-palmowska/">
                    Nadwiślańska harmonia w 80 – metrowym mieszkaniu | proj.:
                    Kamila Palmowska
                  </Link>
                </li>
                <li>
                  <Link href="https://internityhome.pl/inspiracje/realizacje/mikrokawalerka-z-antresola-pelna-kolorow-i-ciekawych-rozwiazan/">
                    Mikrokawalerka z antresolą pełna kolorów i ciekawych
                    rozwiązań
                  </Link>
                </li>
                <li>
                  <Link href="https://internityhome.pl/odkrywaj/triki-architektek-z-morr-studio-ulatwiajace-zycie-w-malym-mieszkaniu">
                    Triki architektek z MORR Studio ułatwiające życie w małym
                    mieszkaniu
                  </Link>
                </li>
                <li>
                  <Link href="https://internityhome.pl/inspiracje/realizacje/mieszkanie-kamienicy-1890-pelne-zaskakujacych-rozwiazan">
                    Mieszkanie w kamienicy z 1890 roku pełne zaskakujących
                    rozwiązań
                  </Link>
                </li>
                <li>
                  <Link href="https://internityhome.pl/inspiracje/realizacje/nowoczesny-vintage-morr-studio">
                    Nowoczesny vintage na 37 metrach kw. (proj. Morr Studio)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>06</span>PLN Design
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <Link href="https://plndesign.pl/75-metrowe-warszawskie-mieszkanie-dla-mlodego-malzenstwa-i-ich-dwuletniego-synka/">
                    75-metrowe warszawskie mieszkanie dla młodego małżeństwa i
                    ich dwuletniego synka
                  </Link>
                </li>
                <li>
                  <Link href="https://plndesign.pl/eleganckie-wnetrza-kancelarii-prawnej-przy-mokotowskiej-51-53-w-warszawie">
                    Eleganckie wnętrza kancelarii prawnej przy Mokotowskiej
                    51/53 w Warszawie
                  </Link>
                </li>
                <li>
                  <Link href="https://plndesign.pl/80-metrowe-mieszkanie-w-krakowie-dla-mlodego-malzenstwa-przestrzen-w-duchu-japandi/">
                    80-metrowe mieszkanie w Krakowie dla młodego małżeństwa -
                    przestrzeń w duchu japandi
                  </Link>
                </li>
                <li>
                  <Link href="https://plndesign.pl/75-metrowe-biuro-marki-modowej-w-warszawskiej-kamienicy/">
                    75-metrowe biuro marki modowej w warszawskiej kamienicy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.publication}>
            <h2>
              <span>07</span>Architektura i Biznes
            </h2>
            <div className={styles.listWrapper}>
              <ul>
                <li>
                  <Link href="https://www.architekturaibiznes.pl/pdd-special/kamila-palmowska-w-cyklu-10-pytan-do-architekta-wnetrz,26017.html">
                    „Dom to przede wszystkim emocje związane z danym miejscem”.
                    Kamila Palmowska w cyklu „10 pytań do architekta wnętrz”
                  </Link>
                </li>
                <li>
                  <Link href="https://www.architekturaibiznes.pl/pdd-special/harmonijna-przystan-dla-mlodego-malzenstwa,25906.html">
                    Harmonijna przystań dla młodego małżeństwa
                  </Link>
                </li>
                <li>
                  <Link href="https://www.architekturaibiznes.pl/pdd-special/flower-power-czyli-wnetrze-z-dusza,12895.html">
                    Flower Power, czyli wnętrze z duszą
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
