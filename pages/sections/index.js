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
        {/* Container Top */}
        <div className="container-top left">
          <div className="container-top-box">
            <div className="container-top-row">
              {/* Breadcrumbs */}
              <div className="breadcrumbs">
                <div className="breadcrumbs-box">
                  <div className="breadcrumbs-item">
                    <a href="/" className="link-s gray underline">Back to Home Page</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container */}
        <div className="container">
          <div className="container-box">
            <div className="container-row">

              {/* Aside */}
              <div className="aside left">
                <div className="aside-box">
                  <div className="aside-row">

                    <div className="aside-navigation">
                      <div className="aside-navigation-box">
                        <div className="aside-navigation-item">
                          <a href="/sections" className="link-m blue underline">Sections</a>
                        </div>
                        <div className="aside-navigation-item">
                          <a href="/sections" className="link-m blue underline">Sections</a>
                        </div>
                        <div className="aside-navigation-item">
                          <a href="/sections" className="link-m blue underline">Sections</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Section */}
              <div className="section left">
                <div className="section-box">
                  <div className="section-row">

                    <div className="content">
                      <div className="content-box">
                        <div className="content-row">
                          <h1 className="font-xxl">{sections.title}</h1>
                          <p className="font-xl lighter">{sections.description}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr className="separator-s" />

        {/* Container Bottom */}
        <div className="container-bottom left">
          <div className="container-bottom-box">
            <div className="container-bottom-row">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
