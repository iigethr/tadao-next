// Main

import React from "react"
import Overlay from "../components/overlay"
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"

import "../assets/stylesheets/tadao.scss"

export default (props) => {
  return (
    <div className="root">
      <Overlay />
      {/* Header */}
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <a href="#" id="overlay-on" className="link-m white">Overlay On Button</a>
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
