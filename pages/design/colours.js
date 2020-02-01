// Design

import Head from "next/head"
import Gray from "../../components/design/colours/gray"
import Purple from "../../components/design/colours/purple"
import Blue from "../../components/design/colours/blue"
import Aqua from "../../components/design/colours/aqua"
import Green from "../../components/design/colours/green"
import Lime from "../../components/design/colours/lime"
import Yellow from "../../components/design/colours/yellow"
import Orange from "../../components/design/colours/orange"
import Red from "../../components/design/colours/red"
import Pink from "../../components/design/colours/pink"

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
        <div className="container-top">
          <h1 className="font-xl lighter">Default Colour Palette</h1>
          <div className="separator-xs" />
          <p>Tadao includes a generous palette of great-looking, well-balanced colors that are perfect for prototyping or for kicking off a brand new project.</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              <Gray />
              <div className="separator-s" />
              <Purple />
              <div className="separator-s" />
              <Blue />
              <div className="separator-s" />
              <Aqua />
              <div className="separator-s" />
              <Green />
              <div className="separator-s" />
              <Lime />
              <div className="separator-s" />
              <Yellow />
              <div className="separator-s" />
              <Orange />
              <div className="separator-s" />
              <Red />
              <div className="separator-s" />
              <Pink />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Design
