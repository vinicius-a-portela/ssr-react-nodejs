/**
 *  YOU CUSTOM APP
 *  YOU CAN PUT YOUR CSS HERE
 */
import React from 'react'
import App from 'next/app'

// Extra Imports if you want to apply css
import Head from 'next/head';
import '../assets/css/global.css';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return(
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Barlow&display=swap" rel="stylesheet"/>
          {/* Put Other Components if you want */}
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp