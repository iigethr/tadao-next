// Legal - Services

// Data
import data from "js-yaml-loader!../../data/legal/legal.yml"
// Components
import Head from "next/head"
import Link from "next/link"
import AsideNavigation from "../../lib/components/legal/aside_navigation"

class Services extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    console.log("Registered a Legal Page - Services")
  }

  render () {
    const legal = this.props.data.legal
    return (
      <div>
        <Head>
          <title>{legal.services.meta_title}</title>
          <meta name="description" content={legal.services.meta_description} />
        </Head>
        <div className="top">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
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
                  <h1>{legal.services.title}</h1>
                  <p>The Service uses third party subprocessors, such as cloud computing providers and customer support software, to provide our services. We enter into GDPR-compliant data processing agreements with each subprocessor, extending GDPR safeguards everywhere personal data is processed.</p>
                  <p>The list of third-party services are:</p>
                  <ol>
                    <li>
                      <a href="https://www.github.com/">Github</a> is a US-based global company that provides hosting for software development version control using Git.
                    </li>
                    <li>
                      <a href="https://www.zeit.co/">Zeit Now</a> is the optimal workflow for frontend teams. All-in-one: Static and JAMstack deployment, Serverless Functions, and Global CDN.
                    </li>
                    <li>
                      <a href="https://analytics.google.com/">Google Analytics</a> is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.
                    </li>
                  </ol>
                  <h4>Can't find what you're looking for? Ask a human: {legal.email}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
