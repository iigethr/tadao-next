// Privacy

// Components
import Link from "next/link"
import AsideNavigation from "../../lib/components/legal/aside_navigation"
// Data
import legal from "js-yaml-loader!../../data/legal/legal.yml"
import legal_privacy from "js-yaml-loader!../../data/legal/legal_privacy.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Privacy extends React.Component {
  static async getInitialProps() {
    return {
      legal: legal,
      legal_privacy: legal_privacy
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Privacy")
  }

  render () {
    const legal = this.props.legal.legal
    const legal_privacy = this.props.legal_privacy.legal_privacy
    return (
      <div>
        <div className="top">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <aside className="aside">
            <AsideNavigation />
          </aside>
          <section className="section">
            <div className="content">
              <div className="content-box">
                <div className="content-row writer">
                  <h1>{legal_privacy.title}</h1>
                  <p>We are strongly committed to protecting the privacy of users of this website. We collect data on this website via: Google Analytics</p>
                  <p>Google Analytics is a web analysis service provided by Google Inc. (“Google”). We use this service on our website to collect standard internet log information and details of visitor behaviour patterns. We do this to make sure it’s meeting its users’ needs and to understand how we could do it better. Google Analytics stores information about what pages you visit, how long you are on the site, how you got here and what you click on. This information is only processed in a way which does not identify anyone and we do not make any attempt to find out the identities of those visiting our website.</p>
                  <p>Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p>
                  <h3>Cookies</h3>
                  <p>Cookies are small data files that are placed on your computer as you browse our website. Most websites do this too. <br />
                  They improve things by:</p>
                  <ol>
                    <li>Remembering settings, so you don’t have to keep re-entering them whenever you visit a new page;</li>
                    <li>Remembering information you’ve given (e.g. your postcode) so you don’t need to keep entering it;</li>
                    <li>Measuring how you use the website so we can make sure it meets your needs.</li>
                  </ol>
                  <p>Our cookies aren’t used to identify you personally. They’re just here to make the site work better for you. Indeed, you can manage and/or delete these small files as you wish. To learn more about cookies and how to manage them, visit <a href="https://aboutcookies.org/" traget="_blank">AboutCookies.org</a>.</p>
                  <p>This list shows the Cookies we use on the site, and their purpose:</p>
                  <p>
                    <strong>Name of the Provider:</strong> The Company<br />
                    <strong>Name: of the Cookie:</strong> <mark>WeLoveCookies</mark><br />
                    <strong>Purpose:</strong> When you visit the Service we ask you if we can use cookies. Upon agreement, we set this cookie in order to allow other cookies.
                  </p>
                  <p>
                    <strong>Name of the Provider:</strong> Google Analytics<br />
                    <strong>Name: of the Cookie:</strong> <mark>_ga</mark> <mark>_gat</mark> <mark>_gid</mark><br />
                    <strong>Purpose:</strong> These cookies are associated with Google Universal Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.
                  </p>
                  <h4>Can't find what you're looking for? Ask a human {legal.email}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Privacy
