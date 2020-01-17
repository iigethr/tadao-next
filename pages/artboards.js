// Base
import Head from "next/head"
// Layout
import Page from "../layouts/main"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"
import Hankyo from "@hankyo/hankyo";
// Dummy
import dummy from "js-yaml-loader!../data/dummy.yml";

class Artboards extends React.Component {
  static async getInitialProps() {
    const title = "Artboards"
    if (process.env.NODE_ENV == "production") {
      const PROJECT_SLUG = process.env.PROJECT_SLUG
      const HANKYO_ACCESS_TOKEN = process.env.HANKYO_ACCESS_TOKEN
      const myHankyo = new Hankyo()
      const response = await myHankyo.project(PROJECT_SLUG, HANKYO_ACCESS_TOKEN)
      const data = await response.json()
      return { data: data, title }
    } else {
      return { data: dummy, title }
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Artboards")
  }

  render () {
    return (
      <div>
        <Head>
        <title>{ this.props.title }</title>
        <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="root">
          <div className="container">
            <div className="container-box">
              <div className="container-row">
                <h1 className="mono font-xxl lighter text-center white-cl">{ this.props.title }</h1>
                <p className="mono lighter text-center purple-100-cl">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</p>
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
