// Design Buttons

class DesignButtons extends React.Component {

  render () {
    return (
      <div className="design-content">
        <div className="design-content-box">
          <div className="design-content-row">
            <a hreaf="#" className="button-xxl">Button</a>
          </div>
        </div>
        <div className="design-content-box">
          <div className="design-content-row">
            <a hreaf="#" className="button-xxl outline">Button</a>
          </div>
        </div>
        <div className="design-content-box">
          <div className="design-content-row">
            <a hreaf="#" className="button-xxl outline has-icon">
              <span class="icon-xxl left"><img src={require("../../assets/images/512x512.png")} /></span>
              Button
            </a>
          </div>
        </div>
        <div className="design-content-box">
          <div className="design-content-row">
            <a hreaf="#" className="button-xxl has-icon">
              <span class="icon-xxl right"><img src={require("../../assets/images/512x512.png")} /></span>
              Button
            </a>
          </div>
        </div>
        <div className="design-content-box">
          <div className="design-content-row">
            <a hreaf="#" className="button-xxl has-icon">
              <span class="icon-xxl"><img src={require("../../assets/images/512x512.png")} /></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default DesignButtons
