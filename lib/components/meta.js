// Meta

import Head from "next/head"

class Meta extends React.Component {
  render () {
    const { title, description, type, url, image, card, handle } = this.props.meta
    return (
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Base */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="application-name" content={title}/>
        {/* Open Graph */}
        <meta property="og:type"        content={type} />
        <meta property="og:url"         content={url} />
        <meta property="og:title"       content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image"       content={image} />
        {/* Twitter */}
        <meta name="twitter:card"         content={card} />
        <meta name="twitter:site"         content={handle} />
        <meta name="twitter:creator"      content={handle} />
        <meta name="twitter:title"        content={title} />
        <meta name="twitter:description"  content={description} />
        <meta name="twitter:image"        content={image} />
      </Head>
    )
  }
}

export default Meta
