import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //Return the Common index.html
  render(){
    return(
      <html>
        <Head>
          <meta name="google-site-verification" content="XsGks9qVoHKbDj9pKWECJaa-onRZrFGj83KtoQP9jMY" />
        </Head>
        <body>
          <Main>
            <NextScript />
          </Main>
        </body>
      </html>
    );
  }
}