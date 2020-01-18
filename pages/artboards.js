// Base
import Head from "next/head"
// Data
// import Hankyo from "@hankyo/hankyo";
import artboards from "js-yaml-loader!../data/artboards.yml";
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Artboards extends React.Component {
  static async getInitialProps() {
    return { data: artboards }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Artboards")
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

          <div className="wrapper">
            <div className="wrapper-box">
              <div className="wrapper-row">
                <div className="artboard-xxl blue-300-bg chip p-16">
                  <code className="blue-900-cl wide">.artboard-xxl</code>
                  <code className="blue-900-cl wide">width: 1920px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-xl blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-xl | width: 1440px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-l blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-l | width: 960px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-m blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-m | width: 720px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-s blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-s | width: 480px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-xs blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-xs | width: 360px</code>
                </div>
              </div>
              <div className="separator-xxs"></div>
              <div className="wrapper-row">
                <div className="artboard-xxs blue-300-bg chip p-16">
                  <code className="blue-900-cl">.artboard-xxs | width: 240px</code>
                </div>
              </div>
            </div>
          </div>

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

export default Artboards;
