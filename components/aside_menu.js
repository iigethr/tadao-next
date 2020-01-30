// Main Menu

import Link from "next/link"

class AsideMenu extends React.Component {

  render () {
    return (
      <div className="aside-menu">
        <div className="aside-menu-box">
            <div className="aside-menu-item">
              <Link href="/design">
                <a className="link-m white mono">Design</a>
              </Link>
            </div>
            <div className="aside-menu-item">
              <Link href="/design/colours">
                <a className="link-m white mono">Colours</a>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default AsideMenu
