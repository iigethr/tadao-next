// Layout
import Page from '../layouts/main'
// SEO Setup
import Head from 'next/head'

const About = () => (
  <Page>
    <Head>
      <title>Tadao Next - About</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
    </Head>
    <div className="root">
      <h1 className="title">About Next.js!</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <img src={require("../assets/images/square.png")} />
    </div>
  </Page>
)

export default About
