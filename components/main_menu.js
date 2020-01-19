/* Main Menu */

import Link from "next/link"

const MainMenu = () => (
  <div className="main-menu">
     <div className="main-menu-box">
        <div className="main-menu-item">
          <Link href="/">
            <a className="link-m white mono">Home</a>
          </Link>
        </div>
        <div className="main-menu-item">
          <Link href="/artboards">
            <a className="link-m white mono">Artboards</a>
          </Link>
        </div>
    </div>
  </div>
)

export default MainMenu
