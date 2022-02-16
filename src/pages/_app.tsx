import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { StringsProvider } from '@core/contexts/StringsContext';
import { APIProvider } from '@core/contexts/APIContext';
import { CharactersProvider } from '@core/contexts/CharactersContext';
import NavBar from '@components/NavBar';
import '@core/styles/global.scss';

class ContingencyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Excelsior Team</title>
        </Head>
        <StringsProvider>
          <APIProvider>
            <CharactersProvider>
              <NavBar />
              <Component {...pageProps} />
            </CharactersProvider>
          </APIProvider>
        </StringsProvider>
      </>
    );
  }
}

export default ContingencyApp;
