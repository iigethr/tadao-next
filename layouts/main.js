import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Copyright from '../components/copyright'

import '../assets/stylesheets/tadao.scss'

export default ({ children }) => (
  <div>
    {/* Head */}
    <Head>
      <title>Tadao Next</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* Header */}
    <header className="universal">
      <div className="universal-box">
        <div className="universal-row">
          <Nav />
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
