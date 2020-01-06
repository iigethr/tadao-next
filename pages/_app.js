// Base
import React from "react";
import App from "next/app";
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class MyApp extends App {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered Custom '_app.js' for Global Node Modules.");
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
