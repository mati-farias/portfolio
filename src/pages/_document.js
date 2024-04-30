import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.svg" />
          <meta name="title" content="Matias Farias - Web Developer" />
          <meta name="description" content="Matias Farias, is a Web Developer with several years of experience." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Matias Farias - Web Developer" />
          <meta property="og:description" content="Matias Farias, is a Web Developer with several years of experience." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
