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
            content="Next Studio Marketplace by Wromo"
          />
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <meta name="google-signin-client_id" content="162887562432-b05sed3sm3ajh9h055hp1n5fi667g4i1.apps.googleusercontent.com"></meta>
          <meta
            property="og:url"
            content="https://wromox.cf/"
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
