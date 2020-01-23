// Base
import React from "react"
// Components
import Cookies from "../components/cookies"
import Copyright from "../components/copyright"
// CSS/SCSS
import "../assets/stylesheets/tadao.scss"

export default (props) => {
  return (
    <div>
      {/* Header */}
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
          </div>
        </div>
      </header>

      {/* Sticky */}
      <div className="sticky">
        {/* Main */}
        <main className="universal main">
          <div className="universal-box">
            <div className="universal-row">
              { props.children }
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <Copyright />
            <Cookies />
          </div>
        </div>
      </footer>
    </div>
  )
}
