/* Main Menu */

import Link from "next/link"

class MainMenu extends React.Component {

  render () {
    return (
      <div className="main-menu">
        <div className="main-menu-box">
            <div className="main-menu-item">
              <Link href="/">
                <a className="link-m white mono">Home</a>
              </Link>
            </div>
            <div className="main-menu-item">
              <Link href="/design">
                <a className="link-m white mono">Design</a>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default MainMenu
