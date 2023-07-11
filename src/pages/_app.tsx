/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useReducer } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import AirportDistanceProvider from '~/lib/contexts/AirportDistavceProvider'

import defaultSEOConfig from '../../next-seo.config';
import Layout from '~/lib/layout';
import flightReducer from '~/lib/reducers/flightReducer';
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
     
      <Layout>
         <AirportDistanceProvider>
          <Component {...pageProps} />
          </AirportDistanceProvider>
      </Layout>
     </>
  );
};

export default MyApp;
