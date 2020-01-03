import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import '../assets/stylesheets/tadao.scss'

const Home = () => (
  <div>
    <Head>
      <title>Tadao Next</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="root">
      <h1 className="title">Welcome to Next.js!</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
