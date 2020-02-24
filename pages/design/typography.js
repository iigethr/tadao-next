// Typography

// Components
import Head from "next/head"
import DesignHeader from "../../lib/components/design/design_header"
import Sans from "../../lib/components/design/fonts/sans"
import Serif from "../../lib/components/design/fonts/serif"
import Mono from "../../lib/components/design/fonts/mono"
// Data
import typography from "js-yaml-loader!../../data/typography.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Typography extends React.Component {
  static async getInitialProps() {
    return {
      typography: typography
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Typography")
  }

  render () {
    const data = this.props.typography.typography
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignHeader data={data} />
        <Sans />
        <Serif />
        <Mono />
      </div>
    )
  }
}

export default Typography
