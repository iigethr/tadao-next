// _app

// Core
import React from "react"
import App from "next/app"
// Layouts
import MainLayout from "../layouts/main"
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
    } else {
      return (
        <MainLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </MainLayout>
      )
    }
  }
}

export default MyApp
