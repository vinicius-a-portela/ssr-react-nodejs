/**
 * THE CUSTOM DOCUMENT
 * YOU CAN PUT YOUR GLOBAL META, AND COMPONENTS
 * 
 * NOTE: YOU CAN IMPORT GLOBAL CSS HERE, YOU HAVE TO DO IT IN _app.js
 */
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //Makes a file in html from here
  render(){
    return(
      <html>
        <Head>
          {/* 
            Put all your global meta here
            
            NOTE: If you want to put head components of a specific page
            you have to import this meta inside the page itself, inside a Head from next/head
          */}
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  }
}