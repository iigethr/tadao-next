// Main Menu

import Link from "next/link"

class AsideMenu extends React.Component {

  render () {
    return (
      <div className="design-aside">
        <div className="design-aside-box">
            <div className="design-aside-item">
              <Link href="/design">
                <a className="link-m white mono">Design</a>
              </Link>
            </div>
            <div className="design-aside-item">
              <Link href="/design/typography">
                <a className="link-m white mono">Typography</a>
              </Link>
            </div>
            <div className="design-aside-item">
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
