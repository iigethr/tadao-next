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
      <link rel="icon" href="favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
      {/* Open Graph */}
      <meta property="og:url"         content="https://tadao-next.now.sh/" />
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content="Tadao + Next" />
      <meta property="og:description" content="A basic kickstart setup for NextJS." />
      <meta property="og:image"       content="https://og-image.now.sh/Tadao%20%2B%20Next.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fzeit-white-triangle.svg" />
      {/* Twitter */}
      <meta name="twitter:card"       content="summary" />
      <meta name="twitter:site"       content="@iigethr" />
      <meta name="twitter:creator"    content="@iigethr" />
      <meta property="og:url"         content="https://tadao-next.now.sh/" />
      <meta property="og:title"       content="Tadao + Next" />
      <meta property="og:description" content="A basic kickstart setup for NextJS." />
      <meta property="og:image"       content="https://og-image.now.sh/Tadao%20%2B%20Next.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fzeit-white-triangle.svg" />
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
