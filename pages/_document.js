import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://api.fontshare.com' />
        <link
          href='https://api.fontshare.com/v2/css?f[]=erode@2,1&f[]=general-sans@1&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
