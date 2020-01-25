// Hero

class Hero extends React.Component {
  render () {
    const { name, description, subtitle } = this.props.project;
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="mono font-xxl magnify lighter text-center white-cl">{name}</h1>
          </div>
          <div className="hero-row">
            <p className="mono font-l lighter text-center purple-100-cl">{description}</p>
            <div className="separator-xxs"></div>
            <p className="mono font-m lighter text-center purple-900-cl">{subtitle}</p>
          </div>
          <div className="hero-row">
            <div className="separator-xs"></div>
            <a className="mono button-xxl purple-dark center-h" href="https://github.com/iigethr/tadao-next" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
