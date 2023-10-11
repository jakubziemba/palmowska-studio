'use client';

import styles from './wspolpraca.module.scss';
import { motion } from 'framer-motion';
import Shape1 from '../../public/svg/shape-1.svg';

export default function Wspolpraca() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.wrapper}>
        {/* <Shape1 className={`${styles.shape1blue} ${styles.shape}`} /> */}
        <div className={styles.heading}>
          <h1 className={styles.title}>Współpraca</h1>
          <p>
            Zajmuję się kompleksowym projektowaniem wnętrz w pełnym zakresie: od etapu koncepcyjnego
            po realizację. Mimo, iż każda oferta jest dostosowana do indywidualnych potrzeb, bazuję
            na stałych etapach projektowych, które ułatwiają i porządkują naszą współpracę.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.stage}>
            <h2>
              <span>01</span>Wstęp
            </h2>
            <p>
              Po otrzymanym zapytaniu ofertowym, przygotowuję wstępną wycenę projektu opisującą
              zakres każdego etapu tak, by jak najlepiej zobrazować naszą przyszłą współpracę.
            </p>
          </div>
          <div className={styles.stage}>
            <h2>
              <span>02</span>Pierwsze spotkanie
            </h2>
            <p>
              Ważnym momentem na samym początku naszej współpracy jest pierwsze spotkanie, na którym
              podczas swobodnej rozmowy, staram się jak najlepiej zgłębić Twoje preferencje i
              wyobrażenia dotyczące własnej, wymarzonej przestrzeni. Oprócz standardowych pytań i
              wskazania preferowanych kolorów, rozmawiamy o Twoim hobby, formie spędzania czasu w
              domu i poza nim czy o codziennych rytuałach. Wszystko po to, by poznać się jak
              najlepiej i stworzyć wnętrze, które będzie dopasowane do Twoich indywidualnych
              potrzeb! To jest czas na rozmowę o planowanym budżecie oraz wymianę pierwszych
              inspiracji, na podstawie których wspólnie zaczynamy spisywać wstępne pomysły
              aranżacyjne.
            </p>
          </div>
          <div className={styles.stage}>
            <h2>
              <span>03</span>Projekt koncepcyjny
            </h2>
            <p>
              Podczas tego etapu przygotowuję możliwe układy funkcjonalne. Wspólnie wybieramy jeden,
              który najbardziej odpowiada Twoim priorytetom. Tworzę model 3D wybranego układu i
              zaczynam implementować kierunki wizualne czyli wszystkie te elementy, które
              ostatecznie wpływają na klimat wnętrza – kolory, faktury, elementy wyposażenia itp. Po
              wyborze ostatecznej wersji, przygotowuję konspekt wybranych rozwiązań aranżacji wraz z
              pakietem wizualizacji pokazujących pomieszczenia z wielu perspektyw.
            </p>
          </div>
          <div className={styles.stage}>
            <h2>
              <span>04</span>Projekt wykonawczy
            </h2>
            <p>
              Na tym etapie przygotowuję opracowanie techniczne składające się z pełnego kompletu
              dokumentacji dla ekipy remontowo–budowlanej czy innych branżystów (stolarzy, szklarzy
              etc.), niezbędnej do zrealizowania projektu aranżacji Twojej przestrzeni. To już
              prawie koniec! Wydrukowane plany dostarczam na budowę, jednocześnie omawiając z
              wykonawcą cały projekt tak aby w trakcie realizacji zminimalizować pojawiające się
              pytania.
            </p>
          </div>
          <div className={styles.stage}>
            <h2>
              <span>05</span>Kosztorys
            </h2>
            <p>
              Martwisz się, że nie znajdziesz produktów, które są w projekcie? Nie zostajesz z tym
              sam. Otrzymujesz również finalną specyfikację wyposażenia dla każdego pomieszczenia w
              formie tabeli zakupowej, w której będą dobrane przeze mnie elementy takie jak:
              oświetlenie, meble wolnostojące, tapety, tekstylia, urządzenia sanitarne etc. z
              niezbędnymi do zakupu adresami sklepów/linkami.
            </p>
          </div>
          <div className={styles.optional}>
            <h2>Opcjonalne etapy współpracy</h2>
            <div className={styles.stage}>
              <h2>
                <span>06</span>Nadzór
              </h2>
              <p>
                Oferuję różne formy nadzoru nad pracami wykończeniowymi. Trzymając pieczę nad
                zgodnością wykonywanych prac z projektem, regularnie spotykam się/ kontaktuję
                telefonicznie ze wszystkimi wykonawcami w trakcie trwania procesu realizacji.
              </p>
            </div>
            <div className={styles.stage}>
              <h2>
                <span>07</span>Obsługa logistyczna
              </h2>
              <p>
                Chcesz być zwolniony z robienia zakupów? Oferuję również koordynację zamówień oraz
                pilotowanie ewentualnych reklamacji czy zwrotów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
