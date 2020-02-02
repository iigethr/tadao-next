// Typography

// React
import Head from "next/head"
// Components
import DesignHeader from "../../components/design/design_header"
import Sans from "../../components/design/fonts/sans"
import Serif from "../../components/design/fonts/serif"
import Mono from "../../components/design/fonts/mono"
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
    console.log("Registered a Page - Typography")
  }

  render () {
    const data = this.props.typography.typography
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="container right col-m-1-1">
          <div className="container-box">
            <div className="container-row">
              <DesignHeader data={data} />
            </div>
            <div className="separator-xs" />
            <div className="container-row">
              <Sans />
              <Serif />
              <Mono />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Typography
