import Layout from './components/Layout';
import localFont from 'next/font/local';
import '../styles/globals.scss';

const instrumentSans = localFont({
  src: '../public/fonts/InstrumentSans.woff2',
  variable: '--font-sans',
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
    <html lang='en' className={`${instrumentSans.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
