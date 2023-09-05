import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>GRoTh</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
      <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
