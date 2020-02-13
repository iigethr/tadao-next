// Advisory

// Components
import Cookies from "../components/cookies"

class Advisory extends React.Component {
  render () {
    const config = this.props.config
    return (
      <div className="universal advisory">
        <div className="universal-box">
          <div className="universal-row">
            <Cookies />
          </div>
        </div>
      </div>
    )
  }
}

export default Advisory
