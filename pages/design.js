// Base
import Head from "next/head"
// Data
// import Hankyo from "@hankyo/hankyo";
import design from "js-yaml-loader!../data/design.yml";
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  static async getInitialProps() {
    return { data: design }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Design")
  }

  render () {
    const { data: { section: { name, description }}} = this.props;
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="root">
          <div className="container">
            <div className="container-box">
              <div className="container-row">
                <h1 className="mono font-xxl lighter text-center white-cl">{name}</h1>
                <p className="mono lighter text-center purple-100-cl">{description}</p>
              </div>
            </div>
          </div>

          <div className="separator-m"></div>

          <div className="separator-m"></div>

          <div className="container">
            <div className="container-box">
              <div className="container-row">
                <h3 className="mono font-l lighter text-center white-cl">Tadao + Next</h3>
                <p className="mono lighter text-center purple-100-cl">A basic kickstart setup for <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a>. <br /> It comes pre-installed with Tadao - A Minimal and Lightweight Design System.</p>
              </div>
              <div className="container-row">
                <a className="mono button-xxl purple-dark center-h" href="https://github.com/iigethr/tadao-next" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
