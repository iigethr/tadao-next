/* Cookies */

import cookies from "next-cookies"

class Cookies extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.handleLoad = this.handleLoad.bind(this)
    this.setCookie = this.setCookie.bind(this)
    this.state = {
      value: cookie,
      message: "Cookies and IP addresses allow us to deliver and improve our web content and to provide you with a personalized experience. Our website uses cookies and collects your IP address for these purposes.",
      klass: "cookies hide-block-element"
    }
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad)
  }

  handleLoad() {
    if (this.state.value === "withMilk") {
      this.setState({
        klass: "cookies hide-block-element"
      })
    } else {
      this.setState({
        klass: "cookies show-block-element"
      })
    }
  }

  setCookie(event) {
    event.preventDefault()
    document.cookie = "weLoveCookies=withMilk; path=/"
    this.setState({
      klass: "cookies hide-block-element"
    })
  }

  render() {
    if (this.state.value === "withMilk") {
      return null
    } else {
      return (
        <div onLoad={this.handleLoad} >
          <div className={this.state.klass}>
            <div className="cookies-box">
              <div className="cookies-row">
                <p className="text-center">{this.state.message}</p>
              </div>
              <div className="cookies-row">
                <a href="#" onClick={this.setCookie} className="button-l black center-h">Click me for COOOOOOOOOKIES!!!!</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Cookies
