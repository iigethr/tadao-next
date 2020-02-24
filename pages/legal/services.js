// Services

// Components
import Link from "next/link"
// Data
import legal from "js-yaml-loader!../../data/legal/legal.yml"
import legal_services from "js-yaml-loader!../../data/legal/legal_services.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Services extends React.Component {
  static async getInitialProps() {
    return {
      legal: legal,
      legal_services: legal_services
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Services")
  }

  render () {
    const legal = this.props.legal.legal
    const legal_services = this.props.legal_services.legal_services
    return (
      <div>
        <div className="design-content">
          <div className="design-content-box">
            <div className="design-content-row">
              <Link href="/legal">
                <a className="link-m gray underline">Back to the Legal Section</a>
              </Link>
            </div>
            <div className="design-content-row">
              <h1 className="font-xxl">{legal_services.title}</h1>
            </div>
            <div className="design-content-row">
              <div className="writer">
                <p>The Service uses third party subprocessors, such as cloud computing providers and customer support software, to provide our services. We enter into GDPR-compliant data processing agreements with each subprocessor, extending GDPR safeguards everywhere personal data is processed.</p>
                <p>The list of third-party services are:</p>
                <ol>
                  <li><a href="https://analytics.google.com/">Google Analytics</a> is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.</li>
                  <li><a href="https://www.github.com/">Github</a> is a US-based global company that provides hosting for software development version control using Git.</li>
                  <li><a href="https://www.zeit.co/">Zeit Now</a> is the optimal workflow for frontend teams. All-in-one: Static and JAMstack deployment, Serverless Functions, and Global CDN.</li>
                </ol>
                <h5>Questions about Third-party Services should be sent to {legal.email}.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
