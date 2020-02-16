// Design Form

class DesignForm extends React.Component {

  render () {
    return (
      <div className="design-content">
        <div className="design-content-box">
          <div className="design-content-row">
            <form>
              <fieldset>
                <legend>Legend</legend>
                <div className="form-row">
                  <div className="form-item">
                    <label>Text</label>
                    <div className="input">
                      <input type="text" id="fname" name="fname" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Email</label>
                    <div className="input">
                      <input type="email" id="fname" name="fname" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Password</label>
                    <div className="input">
                      <input type="password" id="fname" name="fname" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Number</label>
                    <div className="input">
                      <input type="number" id="fname" name="fname" />
                    </div>
                  </div>
                </div>
                {/*
                  <div className="form-row">
                    <div className="form-item">
                      <label>Search</label>
                      <div className="input">
                        <input type="search" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>Tel</label>
                      <div className="input">
                        <input type="tel" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>URL</label>
                      <div className="input">
                        <input type="url" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>Month</label>
                      <div className="input">
                        <input type="month" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>Time</label>
                      <div className="input">
                        <input type="time" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>Week</label>
                      <div className="input">
                        <input type="week" id="fname" name="fname" />
                      </div>
                    </div>
                  </div>
                */}
                <div className="form-row">
                  <div className="form-item">
                    <label>Textarea</label>
                    <div className="textarea">
                      <textarea id="fname" name="fname" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Select</label>
                    <div className="select">
                      <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <p className="label">Checkbox</p>
                  <div className="form-item">
                    <div className="checkbox">
                      <input type="checkbox" id="fname" name="fname" />
                      <label>Checkbox Item</label>
                    </div>
                  </div>
                  <p className="label-reference">Checkbox</p>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <p className="label">Radio</p>
                    <div className="radio">
                      <input type="radio" id="fname" name="fname" />
                      <label>Radio Item</label>
                    </div>
                    <p className="label-reference">Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</p>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="separator-xxl" />
      </div>
    )
  }
}

export default DesignForm
