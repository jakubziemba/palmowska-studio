import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import localFont from 'next/font/local';
import '../styles/globals.scss';

const generalSans = localFont({
  src: '../assets/fonts/GeneralSans.woff2',
  variable: '--font-sans',
  display: 'swap',
});

const erode = localFont({
  src: '../assets/fonts/Erode.woff2',
  variable: '--font-serif',
  display: 'swap',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${generalSans.variable} ${erode.variable}`}>
      <body>
        <Layout>
          {/* <AnimatePresence mode='wait'> */}
          {children}
          {/* </AnimatePresence> */}
        </Layout>
      </body>
    </html>
  );
}
