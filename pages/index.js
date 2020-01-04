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
    <div>
      <Nav />

      <div>
        <h1 className="title">Welcome to Next.js!</h1>
        <img src={require("../assets/images/square.png")} />
      </div>
    </div>
  </div>
)

export default Home
