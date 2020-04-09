// Index

// Components
import Hero from "../lib/components/hero"

class Index extends React.Component {
  componentDidMount() {
    console.log("Registered a Page - Index")
  }

  render () {
    const project = this.props.project
    return (
      <div>
        <Hero project={project} />
      </div>
    )
  }
}

export default Index
