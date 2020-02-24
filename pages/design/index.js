// Index

// Components
import Head from "next/head"
import DesignHeader from "../../lib/components/design/design_header"
// Data
import design from "js-yaml-loader!../../data/design.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return {
      design: design
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Index")
  }

  render () {
    const data = this.props.design.design
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignHeader data={data} />
      </div>
    )
  }
}

export default Index
