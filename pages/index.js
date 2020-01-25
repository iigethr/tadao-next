// Index

import Head from "next/head"
import Hero from "../components/hero"
import ZahaAlignments from "@iigethr/zaha_alignments"

import project from "js-yaml-loader!../data/project.yml";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    return {
      project: project
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH();
    const body = document.getElementsByTagName("body")[0];

    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementsByTagName("html")[0].prepend(node);
    console.log("Registered a Page - Index")
  }

  render () {
    const project = this.props.project.project;
    return (
      <div>
        <Head>
          <title>{project.name}</title>
          <meta name="description" content={project.description} />
        </Head>
        <div className="root">
          <div className="container">
            <div className="container-box">
              <div className="container-row">
                <Hero project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
