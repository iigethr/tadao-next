// Colours

// Core
import Head from "next/head"
// Components
import DesignHeader from "../../components/design/design_header"
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
// Data
import colours from "js-yaml-loader!../../data/colours.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  static async getInitialProps() {
    return {
      colours: colours
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Colours")
  }

  render () {
    const data = this.props.colours.colours
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignHeader data={data} />
        <Gray />
        <Purple />
        <Blue />
        <Aqua />
        <Green />
        <Lime />
        <Yellow />
        <Orange />
        <Red />
        <Pink />
      </div>
    )
  }
}

export default Design
