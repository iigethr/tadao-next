// Main

// React
import React from "react"
// Components
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"
// SCSS
import "../assets/stylesheets/tadao.scss"

export default (props) => {
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
              <div>
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
