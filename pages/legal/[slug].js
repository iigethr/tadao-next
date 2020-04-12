// Legal - ID
import data from "js-yaml-loader!../../data/legal/legal.yml"
// Components
import ErrorPage from "next/error"

class Section extends React.Component {
  static async getInitialProps({ query }) {
    let slug = query.slug
    let sections = data.legal.sections.filter(it => it.slug === slug);
    let section = sections[0] || "notFound"
    console.log(section)
    return { section: section }
  }

  render () {
    const section = this.props.section;
    if (section === "notFound" || section === null) {
      return <ErrorPage statusCode={404} />
    } else {
      return (
        <div>
            <h1>{section.title}</h1>
            <p>{section.body}</p>
        </div>
      )
    }
  }
}

export default Section
