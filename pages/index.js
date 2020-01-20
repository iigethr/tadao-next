// Base
import Head from "next/head"
// Data
// import Hankyo from "@hankyo/hankyo";
import project from "js-yaml-loader!../data/project.yml";
// Components
import Hero from "../components/hero"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    // if (process.env.NODE_ENV == "production") {
    //   const PROJECT_SLUG = process.env.PROJECT_SLUG
    //   const HANKYO_ACCESS_TOKEN = process.env.HANKYO_ACCESS_TOKEN
    //   const myHankyo = new Hankyo()
    //   const response = await myHankyo.project(PROJECT_SLUG, HANKYO_ACCESS_TOKEN)
    //   const data = await response.json()
    //   return { data: data }
    // } else {
    //   return { data: dummy }
    // }
    return { data: project }
  }

  // TODO: need to add errorHandling
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page.")
  }

  render () {
    const project = this.props.data.project;
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
                <Hero project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
