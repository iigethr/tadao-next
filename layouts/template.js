// Template Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()

    ZahaAlignments.centerH()
    console.log("Registered - Template Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    const config = children.props.config
    return (
      <div className="root">
        {/* Head */}
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>

        <Notifications />
        <Header />

        {/* Sticky */}
        <div className="sticky-footer">
          {/* Main */}
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                {/* Artboard */}
                <div className="artboard-l center-h">
                  { children }
                </div>
              </div>
            </div>
          </main>
        </div>

        <Footer config={config}/>
        <Advisory />
      </div>
    )
  }
}

export default Design
