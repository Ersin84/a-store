import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            property="og:title"
            content="Lieferdienst - Wien Online einfach Bestellen"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content="Next Supermarket Marketplace by Wromo"
          />
          <meta
            property="og:url"
            content="https://www.wromo.app/"
          />
          <meta
            property="og:image"
            content="https://wromox.cf/_next/image?url=%2Fslider%2Fslider-1.jpg&w=640&q=75"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
