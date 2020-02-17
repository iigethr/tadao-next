// Design Form

class DesignForm extends React.Component {

  componentDidMount() {
    const selectElement = document.querySelector('.file');
    selectElement.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      const filename = event.target.value.replace(/^.*[\\\/]/, '')
      result.textContent = `You selected: ${filename}`;
    });
  }

  render () {
    return (
      <div className="design-content">
        <div className="design-content-box">
          <div className="design-content-row">
            <form id="form">
              <fieldset>
                <legend>Legend</legend>
                <div className="form-row">
                  <div className="form-item">
                    <label>Text</label>
                    <div className="input">
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <p className="label">File</p>
                  <div className="form-item">
                    <div className="file">
                      <input type="file" className="file" id="fileID" />
                      <label htmlFor="fileID" className="result">Please select a file</label>
                    </div>
                    <p className="label-reference">Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Email</label>
                    <div className="input">
                      <input type="email" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Password</label>
                    <div className="input">
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Number</label>
                    <div className="input">
                      <input type="number" />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label>Textarea</label>
                    <div className="textarea">
                      <textarea />
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
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Checkbox Item</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <p className="label">Radio</p>
                  <div className="form-item">
                    <div className="radio">
                      <input type="radio" id="radio" />
                      <label htmlFor="radio">Radio Item</label>
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
