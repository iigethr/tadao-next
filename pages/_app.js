// _app

// Components
import React from "react"
import App from "next/app"
// Layouts
import CampaignLayout from "../layouts/campaign"
import PrimaryLayout from "../layouts/primary"
import SecondaryLayout from "../layouts/secondary"
// Data
import meta from "js-yaml-loader!../data/meta.yml"
import config from "js-yaml-loader!../data/config.yml"
import project from "js-yaml-loader!../data/project.yml"
// SCSS
import "../assets/stylesheets/tadao.scss"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, meta: meta, config: config, project: project }
  }

  render() {
    const { Component, pageProps, router, config, project } = this.props
    if (router.pathname.startsWith("/campaigns")) {
      return (
        <CampaignLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </CampaignLayout>
      )
    } else if (router.pathname === "/") {
      return (
        <PrimaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </PrimaryLayout>
      )
    } else {
      return (
        <SecondaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </SecondaryLayout>
      )
    }
  }
}
export default MyApp
