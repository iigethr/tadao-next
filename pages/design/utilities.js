// Writer

// Core
import Head from "next/head"
// Components
import DesignHeader from "../../lib/components/design/design_header"
import DesignButtons from "../../lib/components/design/design_buttons"
// Data
import utilities from "js-yaml-loader!../../data/utilities.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Writer extends React.Component {
  static async getInitialProps() {
    return {
      utilities: utilities
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Writer")
  }

  render () {
    const data = this.props.utilities.utilities
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignHeader data={data} />
        <DesignButtons />
      </div>
    )
  }
}

export default Writer
