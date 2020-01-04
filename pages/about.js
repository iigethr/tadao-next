import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import '../assets/stylesheets/tadao.scss'

const About = () => (
  <div>
    <Head>
      <title>Tadao Next - About</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Nav />

      <div>
        <h1 className="title">Welcome to Next.js! - ABout</h1>
        <img src={require("../assets/images/square.png")} />
      </div>
    </div>
  </div>
)

export default About
