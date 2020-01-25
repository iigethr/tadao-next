// Index

import Head from "next/head"
import Hero from "../components/hero"
import ZahaAlignments from "@iigethr/zaha_alignments"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import project from "js-yaml-loader!../data/project.yml";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    return {
      project: project
    }
  }
  targetElement = null;
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
    this.targetElement = document.querySelector('#targetElementId');
  }

  hideTargetElement = () => {
    // ... some logic to hide target element

    // 4. Re-enable body scroll
    enableBodyScroll(this.targetElement);
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
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
