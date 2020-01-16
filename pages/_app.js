// Base
import React from "react";
import App from "next/app";
import Page from "../layouts/main"

class MyApp extends App {
  componentDidMount() {
    console.log("Registered Custom '_app.js' for Global Node Modules.");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default MyApp;
