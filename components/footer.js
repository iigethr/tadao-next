// Footer

// Components
import Copyright from "../components/copyright"
import Legal from "../components/legal"

class Footer extends React.Component {
  render () {
    const config = this.props.config
    return (
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <Legal config={config}/>
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
