// Legal

class Legal extends React.Component {
  render () {
    const { legal_url } = this.props.config
    return (
      <div className="legal">
        <div className="legal-box">
          <div className="legal-item">
            <a href={legal_url} className="link-s center-h" rel="noreferrer">Policies & Terms</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Legal
