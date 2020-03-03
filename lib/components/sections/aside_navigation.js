// Aside Navigation

// Core
import Link from "next/link"

class AsideNavigation extends React.Component {
  render () {
    return (
      <nav className="aside-navigation">
        <div className="aside-navigation-box">
          <div className="aside-navigation-item">
            <h3>Sections</h3>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Sections</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default AsideNavigation
