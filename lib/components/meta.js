// Meta

import Head from "next/head"

class Meta extends React.Component {
  render () {
    const { meta_title, meta_description, meta_type, meta_url, meta_image, meta_card, meta_handle } = this.props.project
    return (
      <Head>
        <meta name="viewport"             content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type"    content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Base */}
        <title>{meta_title}</title>
        <meta name="description"          content={meta_description} />
        <meta name="application-name"     content={meta_title}/>
        {/* Open Graph */}
        <meta property="og:type"          content={meta_type} />
        <meta property="og:url"           content={meta_url} />
        <meta property="og:title"         content={meta_title} />
        <meta property="og:description"   content={meta_description} />
        <meta property="og:image"         content={meta_image} />
        {/* Twitter */}
        <meta name="twitter:card"         content={meta_card} />
        <meta name="twitter:site"         content={meta_handle} />
        <meta name="twitter:creator"      content={meta_handle} />
        <meta name="twitter:title"        content={meta_title} />
        <meta name="twitter:description"  content={meta_description} />
        <meta name="twitter:image"        content={meta_image} />
      </Head>
    )
  }
}

export default Meta
