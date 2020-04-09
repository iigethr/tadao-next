// Navigation

// Components
import Link from "next/link"

class Navigation extends React.Component {
  render () {
    return (
      <nav className="navigation">
        <div className="navigation-box">
          <div className="navigation-item">
            <Link href="/"><a className="link-m white">Home</a></Link>
          </div>
          <div className="navigation-item">
            <Link href="/sections"><a className="link-m white">Sections</a></Link>
          </div>
          <div className="navigation-item">
            <Link href="/campaigns"><a className="link-m white">Campaigns</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navigation
