// _app

// Data
import data from "js-yaml-loader!../data/project.yml"
// Components
import React from "react"
import App from "next/app"
// Layouts
import Campaigns from "../layouts/campaigns"
import Primary from "../layouts/primary"
import Secondary from "../layouts/secondary"
// SCSS
import "../assets/stylesheets/tadao.scss"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, project: data }
  }

  render() {
    const { Component, pageProps, router, project } = this.props
    if (router.pathname.startsWith("/[lang]/campaigns")) {
      return (
        <Campaigns>
          <Component {...pageProps} {...project} />
        </Campaigns>
      )
    } else if (router.pathname === "/") {
      return (
        <Primary>
          <Component {...pageProps} {...project} />
        </Primary>
      )
    } else {
      return (
        <Secondary>
          <Component {...pageProps}{...project} />
        </Secondary>
      )
    }
  }
}
export default MyApp
