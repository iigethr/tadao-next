// Campaigns - Index

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Hero from "../../lib/components/campaigns/hero"
// Data
import data from "js-yaml-loader!../../data/campaigns/campaign.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Campaigns Page - Index")
  }

  render () {
    const campaign = this.props.data.campaign
    return (
      <div>
        <Head>
          <title>{campaign.title}</title>
          <meta name="description" content={campaign.description} />
        </Head>
        <Notifications />
        <Header />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  <Hero campaign={campaign} />
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
