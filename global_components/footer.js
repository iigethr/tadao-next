// Footer

// Components
import Legal from "../components/legal"
import Copyright from "../components/copyright"

class Footer extends React.Component {
  render () {
    return (
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <Legal />
          </div>
          <div className="universal-row">
            <Copyright />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
