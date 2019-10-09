import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //Return the Common index.html
  render(){
    return(
      <html>
        <head>
          <meta charset='utf-8'/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <Main>
            <NextScript />
          </Main>
        </body>
      </html>
    );
  }
}