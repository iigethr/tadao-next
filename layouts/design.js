// Design

import React from "react"
import Head from "next/head"

import DesignAside from "../components/design/design_aside"
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"

import "../assets/stylesheets/tadao.scss"

export default (props) => {
  return (
    <div className="root white-bg">
      <Head>
        <meta name="robots" content="noindex, nofollow, nosnippet, nocache, noimageindex, noarchive" />
      </Head>
      {/* Header */}
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
          </div>
        </div>
      </header>

      {/* Sticky */}
      <div className="sticky-footer">
        {/* Main */}
        <main className="universal main">
          <div className="universal-box">
            <div className="universal-row">
              <div className="artboard-l">
                <DesignAside />
                <div className="artboard-m">
                  { props.children }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <Copyright />
          </div>
        </div>
      </footer>
      <Cookies />
    </div>
  )
}
