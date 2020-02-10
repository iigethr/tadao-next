// Main Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import Notifications from "../global_components/notifications"
import Header from "../global_components/header"
import Footer from "../global_components/footer"
import Advisory from "../global_components/advisory"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered - Main Layout")
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
