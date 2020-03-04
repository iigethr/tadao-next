// Favicons

// Components
import Head from "next/head"

class Favicons extends React.Component {
  render () {
    return (
      <Head>
        {/* Icon */}
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="favicon/favicon-128x128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="favicon/apple-touch-icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
        {/* Windows */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
        <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />
        <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
        <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
        <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
      </Head>
    )
  }
}

export default Favicons
