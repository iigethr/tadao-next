// Legal Layout

// Core
import React from "react"
import Head from "next/head"
// Components
import Footer from "../components/footer"
import Cookies from "../components/cookies"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered - Design Layout")
  }

  render () {
    const { children } = this.props;
    const config = children.props.config
    return (
      <div className="root white-bg">
        {/* Head */}
        <Head>
          <meta name="robots" content="noindex, nofollow, nosnippet, nocache, noimageindex, noarchive" />
        </Head>

        {/* Notifications */}
        <div className="universal notifications">
          <div className="universal-box">
            <div className="universal-row">
            </div>
          </div>
        </div>

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
                  <div className="container left">
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

        <Footer config={config}/>

        {/* Advisory */}
        <div className="universal advisory">
          <div className="universal-box">
            <div className="universal-row">
              <Cookies />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Design
