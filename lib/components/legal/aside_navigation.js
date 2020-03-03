// Aside Navigation

// Core
import Link from "next/link"

class AsideNavigation extends React.Component {
  render () {
    return (
      <nav className="aside-navigation">
        <div className="aside-navigation-box">
          <div className="aside-navigation-item">
            <h3>Legal</h3>
          </div>
          <div className="aside-navigation-item">
            <Link href="/legal/terms"><a className="link-m blue underline">Terms & Conditions</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/legal/privacy"><a className="link-m blue underline">Privacy Policy</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/legal/services"><a className="link-m blue underline">List of third-party services</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default AsideNavigation
