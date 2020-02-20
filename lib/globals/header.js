// Header

// Components
import Navigation from "../../lib/components/navigation"

class Header extends React.Component {
  render () {
    const config = this.props.config
    return (
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <Navigation />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
