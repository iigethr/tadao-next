// Terms

// Components
import Link from "next/link"
import AsideNavigation from "../../lib/components/legal/aside_navigation"
// Data
import legal from "js-yaml-loader!../../data/legal/legal.yml"
import legal_terms from "js-yaml-loader!../../data/legal/legal_terms.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Terms extends React.Component {
  static async getInitialProps() {
    return {
      legal: legal,
      legal_terms: legal_terms
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Legal Page - Terms")
  }

  render () {
    const legal = this.props.legal.legal
    const legal_terms = this.props.legal_terms.legal_terms
    return (
      <div>
        <div className="top">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <aside className="aside">
            <AsideNavigation />
          </aside>
          <section className="section">
            <div className="content">
              <div className="content-box">
                <div className="content-row writer">
                  <h1>{legal_terms.title}</h1>
                  <p>By using {legal.service} ("Service"), you are agreeing to be bound by the following terms and conditions ("Terms of Service"). {legal.company} ("Company", "we", "us" and/or "our") reserves the right to update and change these Terms of Service without notice.</p>
                  <ol>
                    <li>Your use of the Service is at your sole risk. The Service is provided on an “as is” and “as available” basis.</li>
                    <li>You understand that the Company uses third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.</li>
                    <li>You must not modify, adapt or hack the Service.</li>
                    <li>You must not modify another website so as to falsely imply that it is associated with the Service or the Company.</li>
                    <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by the Company.</li>
                    <li>You understand that the technical processing and transmission of the Service, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.</li>
                    <li>The Company does not warrant that (i) the service will meet your specific requirements, (ii) the Service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the Service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations, and (v) any errors in the Service will be corrected.</li>
                    <li>You expressly understand and agree that the Company shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the Service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the Service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the Service; (v) or any other matter relating to the Service.</li>
                    <li>The failure of the Company to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. The Terms of Service constitutes the entire agreement between you and the Company and govern your use of the Service, superceding any prior agreements between you and the Company (including, but not limited to, any prior versions of the Terms of Service).</li>
                  </ol>
                  <p>Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.</p>
                  <h4>Can't find what you're looking for? Ask a human: {legal.email}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Terms
