// Design

import Head from "next/head"
import ZahaAlignments from "@iigethr/zaha_alignments"

import project from "js-yaml-loader!../../data/project.yml"
import section from "js-yaml-loader!../../data/design.yml"

class FontFamily extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Colours")
  }

  render () {
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="container-top">
          <h1 className="font-xl lighter">Font Family</h1>
          <div className="separator-xs" />
          <p>A quick reference to the font families used in this project.</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              {/* Sans-serif */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="sans font-l lighter">Sans-serif</h3>
                    <p className="sans font-xs sans bold">Open Sans</p>
                    <div className="separator-xxs" />
                    <p className="sans">Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                </div>
              </div>
              <div className="separator-s" />
              {/* Serif */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="serif font-l lighter">Serif</h3>
                    <p className="serif font-xs sans bold">Noto Serif</p>
                    <div className="separator-xxs" />
                    <p className="serif">Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                </div>
              </div>
              <div className="separator-s" />
              {/* Monospaced */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row">
                    <h3 className="mono font-l lighter">Monospaced</h3>
                    <p className="mono font-xs sans bold">Ubuntu Mono</p>
                    <div className="separator-xxs" />
                    <p className="mono">Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
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

export default FontFamily
