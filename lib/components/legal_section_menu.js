// Legal Section Menu

// Core
import Link from "next/link"

class LegalSectionMenu extends React.Component {
  render () {
    return (
      <div className="legal-section-menu">
        <ul className="legal-section-menu-box">
          <li className="legal-section-menu-item font-l lighter blue-500-cl">
            <Link href="/legal/privacy">
              <a rel="noreferrer">Privacy Policy</a>
            </Link>
          </li>
          <li className="legal-section-menu-item font-l lighter blue-500-cl">
            <Link href="/legal/terms">
              <a rel="noreferrer">Terms & Conditions</a>
            </Link>
          </li>
          <li className="legal-section-menu-item font-l lighter blue-500-cl">
            <Link href="/legal/gdpr">
              <a rel="noreferrer">General Data Protection Regulation (GDPR)</a>
            </Link>
          </li>
          <li className="legal-section-menu-item font-l lighter blue-500-cl">
            <Link href="/legal/services">
              <a rel="noreferrer">List of third-party services</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default LegalSectionMenu
