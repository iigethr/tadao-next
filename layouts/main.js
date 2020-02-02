// Main Layout

// Core
import React from "react"
// Components
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"
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
      <div className="root">
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
                  { children }
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
