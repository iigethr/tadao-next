// Design Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"
import DesignMenu from "../components/design/design_menu"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered Main Layout")
  }

  render () {
    const { children } = this.props;
    return (
      <div className="root white-bg">
        {/* Head */}
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
                {/* Artboard */}
                <div className="artboard-l center-h">
                  {/* Container */}
                  <div className="container col-xxs-1-1 left">
                    <div className="container-box">
                      <div className="container-row">
                        <DesignMenu />
                      </div>
                    </div>
                  </div>
                  {/* Container */}
                  <div className="container col-m-1-1 right">
                    <div className="container-box">
                      <div className="container-row">
                        { children }
                      </div>
                    </div>
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
}

export default Design
