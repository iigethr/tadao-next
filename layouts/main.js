import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import '../assets/stylesheets/tadao.scss'

export default ({ children }) => (
  <div>
    <Head>
      <title>Tadao Next</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    { children }
  </div>
)
