// Index

// Core
import Head from "next/head"
// Data
import design from "js-yaml-loader!../../data/design.yml"
import config from "js-yaml-loader!../../data/config.yml"

// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return {
      design: design,
      config: config
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
      </div>
    )
  }
}

export default Index
