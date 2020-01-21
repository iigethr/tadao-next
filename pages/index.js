// Base
import Head from "next/head"
// Data
import project from "js-yaml-loader!../data/project.yml";
// Components
import Hero from "../components/hero"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    return {
      project: project
    }
  }

  // TODO: need to add errorHandling
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page.")
  }

  render () {
    const project = this.props.project.project;
    return (
      <div>
        <Head>
          <title>{project.name}</title>
          <meta name="description" content={project.description} />
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
