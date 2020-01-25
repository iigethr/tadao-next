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

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered Document.")
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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
