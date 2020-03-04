// _document

// Components
import Document, { Html, Head, Main, NextScript } from "next/document"
import Meta from "../lib/components/meta"
import Favicons from "../lib/components/favicons"
// Data
import meta from "js-yaml-loader!../data/meta.yml"
import config from "js-yaml-loader!../data/config.yml"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, meta, config }
  }

  render() {
    const meta = this.props.meta.meta
    const config = this.props.config.config
    return (
      <Html lang={config.lang}>
        <Head>
          {/* PWA */}
          <link rel="manifest" href="site.webmanifest.json" />
          <meta name="theme-color" content="#FFFFFF"/>
          <Meta meta={meta} />
          <Favicons/>
        </Head>
        <body id="body">
          <div className="body-root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
