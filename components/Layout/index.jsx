import Nav from '../Nav';
import Footer from '../Footer';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <motion.main
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
