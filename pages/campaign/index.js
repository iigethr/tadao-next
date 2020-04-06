// Campaign - Index

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Hero from "../../lib/components/campaign/hero"
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
        <Head>
          <title>{campaigns.title}</title>
          <meta name="description" content={campaigns.description} />
        </Head>
        <Notifications />
        <Header />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  <Hero campaigns={campaigns} />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
