// Base
import Head from "next/head"
import withConfig from "next/config"
import fetch from "isomorphic-unfetch";
// Dummy
import dummy from 'js-yaml-loader!../data/dummy.yml';
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {

  // TODO: need to add errorHandling
  static async getInitialProps() {
    const {
      publicRuntimeConfig: {PROJECT_SLUG, HANKYO_ACCESS_TOKEN}
      // serverRuntimeConfig: {HANKYO_SECRET_ACCESS_TOKEN}
    } = withConfig()

    const devURL = `http://localhost:4000/mies/team/projects/${PROJECT_SLUG}`
    const proURL = `http://localhost:4000/mies/team/projects/${PROJECT_SLUG}`
    const API_ENDPOINT = process.env.NODE_ENV == "development" ? devURL : proURL
    const token = `Token token=${HANKYO_ACCESS_TOKEN}`;
    const response = await fetch(
      API_ENDPOINT, {
        method: "GET",
        headers: {
          "Authorization": token,
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json()
    return { data, dummy }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page.")
  }

  render () {
    const project = this.props.data.project;
    const dummy = this.props.dummy.project;
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
                <h1 className="mono font-xxl lighter text-center white-cl">{ project.name || dummy.name }</h1>
                <p className="mono lighter text-center purple-100-cl">{ project.description || dummy.description }</p>
                <p className="mono font-s lighter text-center purple-900-cl">{ project.subtitle || dummy.subtitle }</p>
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
