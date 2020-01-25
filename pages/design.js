// Design

import Head from "next/head"
import PromoCard from "../components/promo_card"
import ZahaAlignments from "@iigethr/zaha_alignments"

import project from "js-yaml-loader!../data/project.yml"
import section from "js-yaml-loader!../data/design.yml"

class Design extends React.Component {
  static async getInitialProps() {
    return {
      data: project,
      section: section
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Design")
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
        <div className="container">
          <div className="container-box">
            <div className="container-row">
              {/* should be a component and not "hardcoded"! :) */}
              <h1 className="mono font-xxl lighter text-center white-cl">{name}</h1>
              <p className="mono lighter text-center purple-100-cl">{description}</p>
            </div>

            <div className="separator-m"></div>

            <div className="white-bg left wide p-32">
              <h3 className="font-xxl lighter text-center">Font Families</h3>
              <div className="separator-s"></div>
              <h4 className="text-center">Mono - Ubuntu Mono</h4>
              <p className="mono text-center">Vulputate Purus Pellentesque Vestibulum Malesuada</p>
              <div className="separator-s"></div>
              <h4 className="text-center">Sans - Open Sans</h4>
              <p className="sans text-center">Vulputate Purus Pellentesque Vestibulum Malesuada</p>
              <div className="separator-s"></div>
              <h4 className="text-center">Serif - Noto Serif</h4>
              <p className="serif text-center">Vulputate Purus Pellentesque Vestibulum Malesuada</p>
              <div className="separator-s"></div>
              <h4 className="text-center">Icon - Material Icons</h4>
              <p className="icon text-center">storefront</p>
            </div>

            <div className="separator-m"></div>
            <div className="container-row">
              <PromoCard project={project} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Design
