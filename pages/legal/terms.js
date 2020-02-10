// Terms

// Core
import Link from "next/link"
// Components
import legal_terms from "js-yaml-loader!../../data/legal/legal_terms.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Terms extends React.Component {
  static async getInitialProps() {
    return { legal_terms: legal_terms }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Terms")
  }

  render () {
    const legal_terms = this.props.legal_terms.legal_terms
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
              <h1 className="font-xxl">{legal_terms.title}</h1>
              <p className="font-l lighter">{legal_terms.description}</p>
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

export default Terms
