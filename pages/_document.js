// _document

// Core
import Document, { Html, Head, Main, NextScript } from "next/document"
// Components
import Meta from "../components/meta"
import Favicons from "../components/favicons"
// Data
import meta from "js-yaml-loader!../data/meta.yml"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, meta: meta }
  }

  render() {
    const meta = this.props.meta.meta
    return (
      <Html lang={meta.lang}>
        <Head>
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
