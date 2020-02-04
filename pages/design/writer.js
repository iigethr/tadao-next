// Writer

// Core
import Head from "next/head"
// Components
import DesignHeader from "../../components/design/design_header"
import DesignWriter from "../../components/design/design_writer"
// Data
import writer from "js-yaml-loader!../../data/writer.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Writer extends React.Component {
  static async getInitialProps() {
    return {
      writer: writer
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Writer")
  }

  render () {
    const data = this.props.writer.writer
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignWriter />
      </div>
    )
  }
}

export default Writer
