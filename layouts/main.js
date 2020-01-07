// Base
import React from "react"
import Head from "next/head"
// Components
import Copyright from "../components/copyright"
// CSS/SCSS
import "../assets/stylesheets/tadao.scss"

export default ({ children }) => (
  <div>
    {/* Head */}
    <Head>
      <title>Tadao + Next</title>
      <meta name="description" content="A basic kickstart setup for NextJS." />
      <meta name="application-name" content="Tadao + Next"/>
      {/* Icon */}
      <link rel="icon" href="favicon/favicon.ico" />
      <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="favicon/favicon-128x128.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
      {/* Apple */}
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
      {/* Windows */}
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />
      {/* Android */}
      <link rel="manifest" href="favicon/site.webmanifest" />
      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content="https://tadao-next.now.sh/" />
      <meta property="og:title"       content="Tadao + Next" />
      <meta property="og:description" content="A basic kickstart setup for NextJS." />
      <meta property="og:image"       content="https://og-image.now.sh/Tadao%20%2B%20Next.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fzeit-white-triangle.svg" />
      {/* Twitter */}
      <meta name="twitter:card"         content="summary_large_image" />
      <meta name="twitter:site"         content="@iigethr" />
      <meta name="twitter:creator"      content="@iigethr" />
      <meta name="twitter:title"        content="Tadao + Next" />
      <meta name="twitter:description"  content="A basic kickstart setup for NextJS." />
      <meta name="twitter:image"        content="https://og-image.now.sh/Tadao%20%2B%20Next.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fzeit-white-triangle.svg" />
    </Head>
    {/* Header */}
    <header className="universal">
      <div className="universal-box">
        <div className="universal-row">
        </div>
      </div>
    </header>
    {/* Main */}
    <main className="universal">
      <div className="universal-box">
        <div className="universal-row">
          { children }
        </div>
      </div>
    </main>
    {/* Footer */}
    <footer className="universal">
      <div className="universal-box">
        <div className="universal-row">
          <Copyright />
        </div>
      </div>
    </footer>
  </div>
)
