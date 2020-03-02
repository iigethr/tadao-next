// Index

// Data
import sections from "js-yaml-loader!../../data/sections/sections.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return { sections: sections }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Sections Page - Index")
  }

  render () {
    const sections = this.props.sections.sections
    return (
      <div>
        <div className="design-content">
          <div className="design-content-box">
            <div className="design-content-row">
              <a href="/" className="link-m gray underline">Back to Home Page</a>
            </div>
            <div className="design-content-row">
              <h1 className="font-xxl">{sections.title}</h1>
              <p className="font-xl lighter">{sections.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
