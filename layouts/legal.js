// Legal Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/legal/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.state = {
      value: cookie
    }
  }

  componentDidMount() {
    if ((this.state.value === "withMilk") || (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Legal Layout")
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
                  {/* Container */}
                  <div className="container">
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
