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
          <h1 className="font-xl lighter">Writer</h1>
          <div className="separator-xs" />
          <p>Utilities for controlling the font family of an element.</p>
        </div>
        <div className="separator-s" />
        <div className="container-middle">
          <div className="container-middle-box">
            <div className="container-middle-row">
              {/* Elements */}
              <div className="design-cards">
                <div className="design-cards-box">
                  <div className="design-cards-row writer">
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <abbr>Donec</abbr> ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.</p>
                    <h1>Header 1</h1>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. <a href="#">Etiam porta sem malesuada magna mollis euismod.</a> Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.</p>
                    <div className="media left">
                      <div className="media-box">
                        <div className="media-item center-h">
                          <figure>
                            <img src={require('../../assets/images/512x512.png')} width="128"/>
                            <figcaption>This is a caption</figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.

                    Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.
                    <br />
                    <br />
                    Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

                    Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <ul>
                      <li>Pellentesque Cursus Fermentum Etiam Vehicula Magna Fusce</li>
                      <li>Nibh Lorem Sem Lorem Pellentesque</li>
                      <li>Magna Mattis Dolor Adipiscing Pellentesque</li>
                    </ul>
                    <h2>Header 2</h2>
                    <p>Sed posuere consectetur est at lobortis. Donec sed <sup>odio</sup> dui. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod.</p>
                    <div className="media right">
                      <div className="media-box">
                        <div className="media-item center-h">
                          <div className="video">
                            <iframe src="https://player.vimeo.com/video/386831576" width="228" height="128" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            <div className="vidcaption">This is a caption</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>Donec sed odio dui. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. <br /><br /> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /><br /> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <ol>
                      <li>Pellentesque Cursus Fermentum</li>
                      <li>Nibh Lorem</li>
                      <li>Magna Mattis Dolor Adipiscing</li>
                    </ol>
                    <p>Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <h3>Header 3</h3>
                    <p>Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.</p>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
                    Nullam id dolor id nibh ultricies vehicula ut id elit. <br /> <br /> Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                    <h4>Header 4</h4>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. <mark>Sed posu consectetur est at lobortis.</mark> Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    <blockquote cite="http://www.worldwildlife.org/who/index.html">
                      For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
                    </blockquote>
                    <h5>Header 5</h5>
                    <p>Sed posuere consectetur est at lobortis. <strong>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</strong> Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>Sed posuere consectetur est at lobortis. <del>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</del> Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.</p>
                    <h6>Header 6</h6>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small> Donec ullamcorper nulla non metus auctor fringilla. <em>Etiam porta sem malesuada magna mollis euismod.</em></p>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.</p>
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
