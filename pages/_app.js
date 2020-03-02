// _app

// Core
import React from "react"
import App from "next/app"
// Layouts
import PrimaryLayout from "../layouts/primary"
import SecondaryLayout from "../layouts/secondary"

import LegalLayout from "../layouts/legal"
import DesignLayout from "../layouts/design"

// SCSS
import "../assets/stylesheets/tadao.scss"
// Data
import meta from "js-yaml-loader!../data/meta.yml"
import config from "js-yaml-loader!../data/config.yml"
import project from "js-yaml-loader!../data/project.yml"

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
    if (router.pathname.startsWith("/design")) {
      return (
        <DesignLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </DesignLayout>
      )
    } else if (router.pathname.startsWith("/legal")) {
      return (
        <LegalLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </LegalLayout>
      )
    } else if (router.pathname.startsWith("/sections")) {
      return (
        <SecondaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </SecondaryLayout>
      )
    } else if (router.pathname.startsWith("/campaigns")) {
      return (
        <PrimaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </PrimaryLayout>
      )
    } else {
      return (
        <PrimaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </PrimaryLayout>
      )
    }
  }
}

export default MyApp
