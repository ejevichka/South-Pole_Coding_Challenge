/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@mui/material/styles';
import AirportDistanceProvider from '~/lib/contexts/AirportDistanceProvider'
import { theme } from '~/lib/styles/theme/theme'

import defaultSEOConfig from '../../next-seo.config';
import Layout from '~/lib/layout';
import '~/lib/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <ThemeProvider theme={theme}>
        <Layout>
          <AirportDistanceProvider>
            <Component {...pageProps} />
          </AirportDistanceProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
