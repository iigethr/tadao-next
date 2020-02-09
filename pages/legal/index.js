// Index

// Core
import Head from "next/head"
import Link from "next/link"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Index")
  }

  render () {
    return (
      <div>
        <Head>
          <title>Legal</title>
        </Head>
        <div className="design-content">
          <div className="design-content-box">
            <div className="design-content-row">
              <h1 className="font-xxl">Policies, terms, and legal stuff.</h1>
              <p className="font-l lighter">The rough print and the fine print. We try to make all our policies as clear, fair, and readable as possible.</p>
            </div>
            <div className="separator-s" />
            <div className="design-content-row">
              <ul>
                <li className="font-l lighter">
                  <Link href="/legal">
                    <a rel="noreferrer">Privacy Policy</a>
                  </Link>
                </li>
                <li className="font-l lighter">
                  <Link href="/legal">
                    <a rel="noreferrer">Terms & Conditions</a>
                  </Link>
                </li>
                <li className="font-l lighter">
                  <Link href="/legal">
                    <a rel="noreferrer">General Data Protection Regulation (GDPR)</a>
                  </Link>
                </li>
                <li className="font-l lighter">
                  <Link href="/legal">
                    <a rel="noreferrer">List of third-party services</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
