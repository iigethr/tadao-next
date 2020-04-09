// Campaigns - Index

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Hero from "../../lib/components/campaigns/hero"
// Data
import data from "js-yaml-loader!../../data/campaigns/campaign.yml"

class Index extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    console.log("Registered a Campaigns Page - Index")
  }

  render () {
    const campaign = this.props.data.campaign
    const { meta_title, meta_description } = campaign
    return (
      <div>
        <Head>
          <title>{meta_title}</title>
          <meta name="description" content={meta_description} />
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
