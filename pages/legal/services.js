// Services

// Core
import Link from "next/link"
// Components
import legal_services from "js-yaml-loader!../../data/legal/legal_services.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Services extends React.Component {
  static async getInitialProps() {
    return { legal_services: legal_services }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Services")
  }

  render () {
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
              <p className="font-l lighter">{legal_services.description}</p>
            </div>
            <div className="separator-s" />
            <div className="design-content-row">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
