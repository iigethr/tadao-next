// Design

import Head from "next/head"
import ZahaAlignments from "@iigethr/zaha_alignments"

import project from "js-yaml-loader!../../data/project.yml"
import section from "js-yaml-loader!../../data/design.yml"

class Design extends React.Component {
  static async getInitialProps() {
    return {
      data: project,
      section: section
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Colours")
  }

  render () {
    const project = this.props.data.project
    const { section: { section: { name, description }}} = this.props
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="container">
          <p>Design</p>
        </div>
      </div>
    )
  }
}

export default Design
