// Index

// Data
import campaigns from "js-yaml-loader!../../data/campaigns/campaigns.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return { campaigns: campaigns }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Campaigns Page - Index")
  }

  render () {
    const campaigns = this.props.campaigns.campaigns
    return (
      <div>
        <div className="design-content">
          <div className="design-content-box">
            <div className="design-content-row">
              <a href="/" className="link-m gray underline">Back to Home Page</a>
            </div>
            <div className="design-content-row">
              <h1 className="font-xxl">{campaigns.title}</h1>
              <p className="font-xl lighter">{campaigns.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
