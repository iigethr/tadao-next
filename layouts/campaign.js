// Campaigns Layout

// Components
import React from "react"
import Head from "next/head"
import { initGA, logPageView } from "../lib/globals/google_analytics"
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
    if ((this.state.value === "withMilk") && (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Campaigns Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    return (
      <div className="root pink-500-bg">
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        { children }
      </div>
    )
  }
}

export default Design
