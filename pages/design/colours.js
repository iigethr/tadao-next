// Colours

// Components
import Head from "next/head"
import DesignHeader from "../../lib/components/design/design_header"
import Gray from "../../lib/components/design/colours/gray"
import Purple from "../../lib/components/design/colours/purple"
import Blue from "../../lib/components/design/colours/blue"
import Aqua from "../../lib/components/design/colours/aqua"
import Green from "../../lib/components/design/colours/green"
import Lime from "../../lib/components/design/colours/lime"
import Yellow from "../../lib/components/design/colours/yellow"
import Orange from "../../lib/components/design/colours/orange"
import Red from "../../lib/components/design/colours/red"
import Pink from "../../lib/components/design/colours/pink"
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
