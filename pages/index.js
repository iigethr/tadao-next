// Layout
import Page from "../layouts/main"
// SEO Setup
import Head from "next/head"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {

  static async getInitialProps() {
    const msg = "Tadao + Next"
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
        <title>Tadao + Next</title>
        <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="root">
          <div className="container">
            <div className="container-box">
              <div className="container-row">
                <h1 className="mono font-xxl lighter text-center white-cl">{ this.props.msg }</h1>
                <p className="mono lighter text-center purple-100-cl">A basic kickstart setup for <a href="https://nextjs.org/" target="_blank">NextJS</a>. <br /> It comes pre-installed with Tadao - A Minimal and Lightweight Design System.</p>
                <p className="mono font-s lighter text-center purple-900-cl">Named in tribute to my favourite architect Tadao Andō.</p>
              </div>
              <div className="container-row">
                <a className="mono button-xxl purple-dark center-h" href="https://github.com/iigethr/tadao-next" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Index;
