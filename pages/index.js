// Index

// Core
import Head from "next/head"
// Components
import Hero from "../components/hero"
// Data
import project from "js-yaml-loader!../data/project.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    return {
      project: project
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
  }

  render () {
    const project = this.props.project.project
    return (
      <div>
        <Head>
          <title>{project.name}</title>
          <meta name="description" content={project.description} />
        </Head>
        <Hero project={project} />
      </div>
    )
  }
}

export default Index
