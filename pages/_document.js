import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://api.fontshare.com' />
        <link
          href='https://api.fontshare.com/v2/css?f[]=erode@400&f[]=general-sans@500&display=swap'
          rel='stylesheet'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='~/public/safari-pinned-tab.svg' color='#f5f4ef' />
        <meta name='msapplication-TileColor' content='#f5f4ef' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
