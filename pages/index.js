// Layout
import Page from '../layouts/main'
// SEO Setup
import Head from 'next/head'
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {

  static async getInitialProps() {
    const msg = "Welcome to Next.js!"
    return { msg }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Component.");
  }

  render () {
    return (
      <Page>
        <Head>
          <title>Tadao Next</title>
          <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
        </Head>
        <div className="root">
          <h1 className="font-l text-center">{ this.props.msg }</h1>
          <p className="text-center">Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <a className="center-h" href="#">Test Me</a>
        </div>
      </Page>
    );
  }
}

export default Index;
