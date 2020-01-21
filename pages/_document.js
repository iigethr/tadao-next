// Base
import Document, { Html, Head, Main, NextScript } from "next/document"
import Meta from "../components/meta"
// Data
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
        </Head>
        <body className="purple-500-bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
