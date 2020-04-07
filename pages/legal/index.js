// Legal - Index

// Data
import data from "js-yaml-loader!../../data/legal/legal.yml"
// Components
import Link from "next/link"
import AsideNavigation from "../../lib/components/legal/aside_navigation"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Index")
  }

  render () {
    const { title, description } = this.props.data.legal
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
            <AsideNavigation />
          </aside>
          <section className="section">
            <div className="content">
              <div className="content-box">
                <div className="content-row writer">
                  <h1>{title}</h1>
                  <p>{description}</p>
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
