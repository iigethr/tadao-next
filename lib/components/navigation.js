// Navigation

// Core
import Link from "next/link"

class Navigation extends React.Component {
  render () {
    return (
      <div className="navigation">
        <div className="navigation-box">
          <div className="navigation-item">
            <Link href="/design">
              <a className="link-m white">Design</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Navigation
