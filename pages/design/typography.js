// Design

import Head from "next/head"
import ZahaAlignments from "@iigethr/zaha_alignments"

import project from "js-yaml-loader!../../data/project.yml"
import section from "js-yaml-loader!../../data/design.yml"

class Design extends React.Component {
  static async getInitialProps() {
    return {
      data: project,
      section: section
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Colours")
  }

  render () {
    const project = this.props.data.project
    const { section: { section: { name, description }}} = this.props
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="container-top">
          <h1 className="font-xl lighter">Font Family</h1>
          <div className="separator-xs" />
          <p>Utilities for controlling the font family of an element.</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              {/* Sans-serif */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="font-l lighter">Sans-serif</h3>
                    <p className="sans">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                  </div>
                </div>
              </div>
              <div className="separator-s" />
              {/* Serif */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="font-l lighter">Serif</h3>
                    <p className="serif">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                  </div>
                </div>
              </div>
              <div className="separator-s" />
              {/* Monospaced */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="font-l lighter">Monospaced</h3>
                    <p className="mono">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                  </div>
                </div>
              </div>

              <div className="separator-s" />

              {/* Elements */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="font-l lighter">Elements</h3>
                    <p className="font-xxl">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-xl">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-l">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-m">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-s">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-xs">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p className="font-xxs">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                  </div>
                </div>
              </div>
              {/* Elements */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="font-l lighter">Elements</h3>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p>Abbr: Aenean eu leo quam. <abbr>Pellentesque</abbr> ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <p><code>Code: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</code></p>
                    <p><del>Del: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</del></p>
                    <p><em>Em: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</em></p>
                    <p><mark>Mark: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</mark></p>
                    <p><small>Small: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</small></p>
                    <p><strong>Strong: Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Design
