// _app

// Core
import React from "react"
import App from "next/app"
// Layouts
import MainLayout from "../layouts/main"
import DesignLayout from "../layouts/design"
// SCSS
import "../assets/stylesheets/tadao.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    if (router.pathname.startsWith("/design")) {
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
