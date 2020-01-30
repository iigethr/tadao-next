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
          <h1 className="font-xl lighter">Default Colour Palette</h1>
          <div className="separator-xs" />
          <p>Tadao includes a generous palette of great-looking, well-balanced colors that are perfect for prototyping or for kicking off a brand new project.</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              {/* Gray */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Gray</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-900-bg gray-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-800-bg gray-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-700-bg gray-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-600-bg gray-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-500-bg gray-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-400-bg gray-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-300-bg gray-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-200-bg gray-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-100-bg gray-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs gray-000-bg gray-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Gray */}
              <div className="separator-s" />
              {/* Purple */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Purple</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-900-bg purple-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-800-bg purple-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-700-bg purple-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-600-bg purple-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-500-bg purple-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-400-bg purple-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-300-bg purple-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-200-bg purple-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-100-bg purple-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs purple-000-bg purple-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Purple */}
              <div className="separator-s" />
              {/* Blue */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Blue</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-900-bg blue-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-800-bg blue-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-700-bg blue-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-600-bg blue-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-500-bg blue-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-400-bg blue-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-300-bg blue-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-200-bg blue-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-100-bg blue-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs blue-000-bg blue-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Blue */}
              <div className="separator-s" />
              {/* Aqua */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Aqua</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-900-bg aqua-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-800-bg aqua-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-700-bg aqua-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-600-bg aqua-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-500-bg aqua-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-400-bg aqua-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-300-bg aqua-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-200-bg aqua-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-100-bg aqua-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs aqua-000-bg aqua-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Aqua */}
              <div className="separator-s" />
              {/* Green */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Green</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-900-bg green-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-800-bg green-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-700-bg green-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-600-bg green-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-500-bg green-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-400-bg green-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-300-bg green-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-200-bg green-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-100-bg green-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs green-000-bg green-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Green */}
              <div className="separator-s" />
              {/* Lime */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Lime</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-900-bg lime-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-800-bg lime-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-700-bg lime-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-600-bg lime-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-500-bg lime-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-400-bg lime-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-300-bg lime-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-200-bg lime-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-100-bg lime-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs lime-000-bg lime-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Lime */}
              <div className="separator-s" />
              {/* Yellow */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Yellow</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-900-bg yellow-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-800-bg yellow-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-700-bg yellow-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-600-bg yellow-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-500-bg yellow-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-400-bg yellow-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-300-bg yellow-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-200-bg yellow-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-100-bg yellow-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs yellow-000-bg yellow-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Yellow */}
              <div className="separator-s" />
              {/* Orange */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Orange</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-900-bg orange-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-800-bg orange-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-700-bg orange-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-600-bg orange-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-500-bg orange-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-400-bg orange-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-300-bg orange-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-200-bg orange-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-100-bg orange-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs orange-000-bg orange-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Orange */}
              <div className="separator-s" />
              {/* Red */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Red</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-900-bg red-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-800-bg red-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-700-bg red-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-600-bg red-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-500-bg red-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-400-bg red-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-300-bg red-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-200-bg red-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-100-bg red-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs red-000-bg red-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Red */}
              <div className="separator-s" />
              {/* Pink */}
              <div className="colour-chips">
                <div className="colour-chips-box">
                  <div className="colour-chips-item wide">
                    <h3 className="font-l lighter">Pink</h3>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-900-bg pink-000-cl">900</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-800-bg pink-000-cl">800</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-700-bg pink-000-cl">700</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-600-bg pink-000-cl">600</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-500-bg pink-000-cl">500</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-400-bg pink-000-cl">400</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-300-bg pink-000-cl">300</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-200-bg pink-900-cl">200</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-100-bg pink-900-cl">100</p>
                  </div>
                  <div className="colour-chips-item">
                    <p className="font-xxs pink-000-bg pink-900-cl">000</p>
                  </div>
                </div>
              </div>
              {/* End Pink */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Design
