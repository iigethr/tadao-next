// Index

// Components
import LegalSectionMenu from "../../lib/components/legal_section_menu"
import legal from "js-yaml-loader!../../data/legal/legal.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return { legal: legal }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Index")
  }

  render () {
    const legal = this.props.legal.legal
    return (
      <div>
        <div className="design-content">
          <div className="design-content-box">
            <div className="design-content-row">
              <a href="/" className="link-m gray underline">Back to Home Page</a>
            </div>
            <div className="design-content-row">
              <h1 className="font-xxl">{legal.title}</h1>
              <p className="font-l lighter">{legal.description}</p>
            </div>
          </div>
        </div>
        <LegalSectionMenu />
      </div>
    )
  }
}

export default Index
