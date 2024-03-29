"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import MyImage from "../components/MyImage";

export default function Kontakt() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.wrapper}>
        <h1>Kontakt</h1>
        <div className={styles.content}>
          <p>
            Jeżeli chciałbyś dowiedzieć się więcej na temat współpracy ze mną,
            umówić się na spotkanie bądź wycenić projekt, zapraszam do kontaktu.
          </p>
          <div className={styles.links}>
            <p>
              <span className='font-[550]'>Email:</span>{" "}
              <a href="mailto:hello@kamilapalmowska.com">
                hello@kamilapalmowska.com
              </a>
            </p>
            <p>
              <span className='font-[550]'>Telefon: </span>
              <a href="tel:+48 600 897 821">+48 600 897 821</a>
              <span className='font-normal ml-2'>(9:30-17:30)</span>
            </p>
            <p>
              <span className='font-[550]'>Instagram: </span>
              <a href="https://www.instagram.com/palmowska__studio">
                @palmowska__studio
              </a>
            </p>
            <p>
              <span className='font-[550]'>Facebook: </span>
              <a href="https://www.facebook.com/profile.php?id=100087842247172">
                Palmowska Studio
              </a>
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <MyImage
            src="/me2.jpg"
            width={1000}
            height={1500}
            alt="Kamila Palmowska"
            quality={80}
            loading="eager"
            priority={true}
            sizes="(max-width: 480px) 50vw,(max-width: 600px) 75vw, (max-width: 768px) 80vw, 100vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
