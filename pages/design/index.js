// Design

import Head from "next/head"

import design from "js-yaml-loader!../../data/design.yml"

class Index extends React.Component {
  static async getInitialProps() {
    return {
      design: design
    }
  }

  componentDidMount() {
    console.log("Registered a Page - Design Index")
  }

  render () {
    const design = this.props.design.design
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
      </div>
    )
  }
}

export default Index
