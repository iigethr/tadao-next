// Layout
import Page from '../layouts/main'
// SEO Setup
import Head from 'next/head'

class Index extends React.Component {
  // Align element horizontally
  async centerH() {
    const elements = document.querySelectorAll(".center-h");

    if (elements) {
      elements.forEach( (element) => {
        // Log
        console.log(element);

        // centerHParent
        const centerHParent = document.createElement("div");
        centerHParent.setAttribute("class", "center-h-parent");

        // centerHChild
        const centerHChild = document.createElement("div");
        centerHChild.setAttribute("class", "center-h-child");

        // Insert centerHParent
        element.parentNode.insertBefore(centerHParent, element);

        // Append
        centerHParent.appendChild(centerHChild);
        centerHChild.appendChild(element);
      });
    }
  }

  static async getInitialProps() {
    const msg = "Welcome to Next.js!"
    return { msg }
  }

  componentDidMount() {
    this.centerH()
    console.log("Registered a Component.");
  }

  render () {
    return (
      <Page>
        <Head>
          <title>Tadao Next</title>
          <meta name="description" content="Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla." />
        </Head>
        <div className="root">
          <h1 className="font-l text-center">{ this.props.msg }</h1>
          <p className="text-center">Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <a className="center-h" href="#">Test Me</a>
        </div>
      </Page>
    );
  }
}

export default Index;
