// Forms

// Components
import Head from "next/head"
import DesignHeader from "../../lib/components/design/design_header"
import DesignForm from "../../lib/components/design/design_form"
// Data
import forms from "js-yaml-loader!../../data/forms.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Forms extends React.Component {
  static async getInitialProps() {
    return {
      forms: forms
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Design Page - Forms")
  }

  render () {
    const data = this.props.forms.forms
    return (
      <div>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content={data.description} />
        </Head>
        <DesignHeader data={data} />
        <DesignForm />
      </div>
    )
  }
}

export default Forms
