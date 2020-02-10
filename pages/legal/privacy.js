// Privacy

// Core
import Link from "next/link"
// Components
import legal_privacy from "js-yaml-loader!../../data/legal/legal_privacy.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Privacy extends React.Component {
  static async getInitialProps() {
    return { legal_privacy: legal_privacy }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Privacy")
  }

  render () {
    const legal_privacy = this.props.legal_privacy.legal_privacy
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
              <h1 className="font-xxl">{legal_privacy.title}</h1>
              <p className="font-l lighter">{legal_privacy.description}</p>
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

export default Privacy
