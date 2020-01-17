// Base
import Head from "next/head"
// Dummy
import dummy from "js-yaml-loader!../data/dummy.yml";
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"
import Hankyo from "@hankyo/hankyo";

class Index extends React.Component {
  static async getInitialProps() {
    if (process.env.NODE_ENV == "production") {
      const PROJECT_SLUG = process.env.PROJECT_SLUG
      const HANKYO_ACCESS_TOKEN = process.env.HANKYO_ACCESS_TOKEN
      const myHankyo = new Hankyo()
      const response = await myHankyo.project(PROJECT_SLUG, HANKYO_ACCESS_TOKEN)
      const data = await response.json()
      return { data: data }
    } else {
      return { data: dummy }
    }
  }

  // TODO: need to add errorHandling
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page.")
  }

  render () {
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
                <h1 className="mono font-xxl lighter text-center white-cl">{this.props.data.project.name}</h1>
                <p className="mono lighter text-center purple-100-cl">{this.props.data.project.description}</p>
                <p className="mono font-s lighter text-center purple-900-cl">{this.props.data.project.subtitle}</p>
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

export default Index;
