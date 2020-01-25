// _document

import Document, { Html, Head, Main, NextScript } from "next/document"
import Meta from "../components/meta"
import Favicons from "../components/favicons"

import meta from "js-yaml-loader!../data/meta.yml";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, meta: meta }
  }

  render() {
    const meta = this.props.meta.meta;
    return (
      <Html lang="en-GB">
        <Head>
          <Meta meta={meta} />
          <Favicons/>
        </Head>
        <body>
          <div className="body-wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
