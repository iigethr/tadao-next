// Campaign Layout

// Components
import React from "react"
import Head from "next/head"
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Advisory from "../lib/globals/advisory"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Campaign extends React.Component {
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
    console.log("Registered - Campaign Layout")
  }

  render () {
    const { children } = this.props
    const project = children.props.project
    return (
      <div className="root pink-500-bg">
        <Head>
          <title>{project.meta_title}</title>
          <meta name="description" content={project.meta_description} />
        </Head>
        { children }
        <Advisory />
      </div>
    )
  }
}

export default Campaign
