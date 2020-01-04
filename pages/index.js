// Layout
import Page from '../layouts/main'
// SEO Setup
import Head from 'next/head'

const Index = () => (
  <Page>
    <Head>
      <title>Tadao Next</title>
      <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
    </Head>
    <div className="root">
      <h1 className="font-l text-center">Welcome to Next.js!</h1>
      <p className="text-center">Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
    </div>
  </Page>
)

export default Index
