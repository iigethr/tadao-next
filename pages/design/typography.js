// Typography

// React
import Head from "next/head"
// Components
import Sans from "../../components/design/fonts/sans"
import Serif from "../../components/design/fonts/serif"
import Mono from "../../components/design/fonts/mono"
// Data
import typography from "js-yaml-loader!../../data/typography.yml"

class Typography extends React.Component {
  static async getInitialProps() {
    return {
      typography: typography
    }
  }

  componentDidMount() {
    console.log("Registered a Page - Colours")
  }

  render () {
    const typography = this.props.typography.typography
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="container-top">
          <h1 className="font-xl lighter">{typography.name}</h1>
          <div className="separator-xs" />
          <p>{typography.description}</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              <Sans />
              <Serif />
              <Mono />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Typography
