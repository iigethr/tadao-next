// _app

import React from "react"
import App from "next/app"
import MainLayout from "../layouts/main"
import DesignLayout from "../layouts/design"

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    if (router.pathname.startsWith('/design')) {
      return (
        <DesignLayout>
          <Component {...pageProps} />
        </DesignLayout>
      )
    } else {
      return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )
    }
  }
}

export default MyApp
