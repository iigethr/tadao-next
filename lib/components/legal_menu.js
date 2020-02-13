// Legal Menu

// Core
import Link from "next/link"

class LegalMenu extends React.Component {
  render () {
    return (
      <div className="legal">
        <div className="legal-box">
          <div className="legal-row center-h">
            <Link href="/legal">
              <a className="link-xs underline" rel="noreferrer">Policies & Terms</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default LegalMenu
