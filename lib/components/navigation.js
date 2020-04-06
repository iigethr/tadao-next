// Navigation

class Navigation extends React.Component {
  render () {
    return (
      <nav className="navigation">
        <div className="navigation-box">
          <div className="navigation-item">
            <a href="/" className="link-m white">Home</a>
          </div>
          <div className="navigation-item">
            <a href="/sections" className="link-m white">Sections</a>
          </div>
          <div className="navigation-item">
            <a href="/campaigns" className="link-m white">Campaigns</a>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navigation
