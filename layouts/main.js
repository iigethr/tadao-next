// Main

import React from "react"
import Overlay from "../components/overlay"
import OverlaySecondary from "../components/overlay_secondary"
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"

import "../assets/stylesheets/tadao.scss"

export default (props) => {
  return (
    <div className="root">
      <Overlay />
      <OverlaySecondary />
      {/* Header */}
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <a href="#" id="overlay-on" className="link-m white left">Overlay On Button</a>
            <a href="#" id="overlay-on-secondary" className="link-m white right">Overlay On Button</a>
          </div>
        </div>
      </header>

      {/* Sticky */}
      <div className="sticky-footer">
        {/* Main */}
        <main className="universal main">
          <div className="universal-box">
            <div className="universal-row">
              <div className="root">
                { props.children }
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
