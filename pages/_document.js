import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //Return the Common index.html
  render(){
    return(
      <html>
        <Head></Head>
        <body>
          <Main>
            <NextScript />
          </Main>
        </body>
      </html>
    );
  }
}