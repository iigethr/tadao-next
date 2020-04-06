// Secondary Layout

// Components
import React from "react"
import Head from "next/head"
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Secondary extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.state = {
      value: cookie
    }
  }

  componentDidMount() {
    if ((this.state.value === "withMilk") && (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Secondary Layout")
  }

  render () {
    const { children } = this.props
    const project = children.props.project
    return (
      <div className="root white-bg">
        <Head>
          <title>{project.meta_title}</title>
          <meta name="description" content={project.meta_description} />
        </Head>
        <Notifications />
        <Header />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  { children }
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
        <Advisory />
      </div>
    )
  }
}

export default Secondary
