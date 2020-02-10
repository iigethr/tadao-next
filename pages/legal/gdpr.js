// GDPR

// Core
import Link from "next/link"
// Components
import legal_gdpr from "js-yaml-loader!../../data/legal/legal_gdpr.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class GDPR extends React.Component {
  static async getInitialProps() {
    return { legal_gdpr: legal_gdpr }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - GDPR")
  }

  render () {
    const legal_gdpr = this.props.legal_gdpr.legal_gdpr
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
              <h1 className="font-xxl">{legal_gdpr.title}</h1>
              <p className="font-l lighter">{legal_gdpr.description}</p>
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

export default GDPR
