// Index

// Components
import Link from "next/link"
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
        <div className="top">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/"><a href="/" className="link-s gray underline">Back to Home Page</a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <aside className="aside">
            <nav className="aside-navigation">
              <div className="aside-navigation-box">
                <div className="aside-navigation-item">
                  <h3>Sections</h3>
                </div>
                <div className="aside-navigation-item">
                  <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
                </div>
                <div className="aside-navigation-item">
                  <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
                </div>
                <div className="aside-navigation-item">
                  <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
                </div>
              </div>
            </nav>
          </aside>

          <section className="section">
            <div className="content">
              <div className="content-box">
                <div className="content-row writer">
                  <h1 className="font-xxl">{sections.title}</h1>
                  <p className="font-xl lighter">{sections.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/"><a className="link-s gray underline">Back to Home Page</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
