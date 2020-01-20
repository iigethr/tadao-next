// Base
import Head from "next/head"
// Data
import project from "js-yaml-loader!../data/project.yml";
import section from "js-yaml-loader!../data/design.yml";
// Components
import PromoCard from "../components/promo_card"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

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
    const project = this.props.data.project;
    const { section: { section: { name, description }}} = this.props;
    return (
      <div>
        <Head>
          <title>Tadao + Next</title>
          <meta name="description" content="A basic kickstart setup for NextJS." />
        </Head>
        <div className="root">
          <div className="container">
            <div className="container-box">
              <div className="container-row">
                {/* should be a component and not "hardcoded"! :) */}
                <h1 className="mono font-xxl lighter text-center white-cl">{name}</h1>
                <p className="mono lighter text-center purple-100-cl">{description}</p>
              </div>
              <div className="container-row">
                <PromoCard project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
