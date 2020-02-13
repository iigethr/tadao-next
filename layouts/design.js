// Design Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
import DesignMenu from "../lib/components/design/design_menu"
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
    console.log("Registered - Design Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    const config = children.props.config
    return (
      <div className="root white-bg">
        {/* Head */}
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="robots" content="noindex, nofollow, nosnippet, nocache, noimageindex, noarchive" />
        </Head>

        {/* Notifications */}
        <div className="universal notifications">
          <div className="universal-box">
            <div className="universal-row">
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="universal header">
          <div className="universal-box">
            <div className="universal-row">
            </div>
          </div>
        </header>

        {/* Sticky */}
        <div className="sticky-footer">
          {/* Main */}
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                {/* Artboard */}
                <div className="artboard-l center-h">
                  {/* Container */}
                  <div className="container col-xxs-1-1 left">
                    <div className="container-box">
                      <div className="container-row">
                        <DesignMenu />
                      </div>
                    </div>
                  </div>
                  {/* Container */}
                  <div className="container col-m-1-1 right">
                    <div className="container-box">
                      <div className="container-row">
                        { children }
                      </div>
                    </div>
                  </div>
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
