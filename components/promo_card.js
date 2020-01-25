// Promo Card

class PromoCard extends React.Component {
  render () {
    const { name, description, subtitle } = this.props.project;
    return (
      <div className="promo-card">
        <div className="promo-card-box">
            <div className="promo-card-row">
              <h3 className="mono font-l lighter text-center white-cl">{name}</h3>
              <p className="mono lighter text-center purple-100-cl">{description}</p>
              <p className="mono font-s lighter text-center purple-900-cl">{subtitle}</p>
            </div>
            <div className="promo-card-row">
              <a className="mono button-xxl purple-dark center-h" href="https://github.com/iigethr/tadao-next" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
      </div>
    )
  }
}

export default PromoCard
