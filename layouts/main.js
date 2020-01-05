import React from 'react'
import Head from 'next/head'
import MainMenu from '../components/main_menu'
import Copyright from '../components/copyright'

{/* Load all CSS/SCSS files */}
import '../assets/stylesheets/tadao.scss'

export default ({ children }) => (
  <div>
    {/* Head */}
    <Head>
      <title>Tadao Next</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
      <link rel="icon" href="favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
    </Head>
    {/* Header */}
    <header className="universal">
      <div className="universal-box">
        <div className="universal-row">
          <MainMenu />
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
