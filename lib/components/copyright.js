// Copyright

class Copyright extends React.Component {
  componentDidMount() {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }

  render () {
    return (
      <div className="copyright">
        <div className="copyright-box">
          <div className="copyright-row">
            <p className="font-xs purple-700-cl text-center">Copyright © <span className="year"></span> <a href="https://www.iigethr.com/" target="_blank" rel="noreferrer">IIGETHR Ltd</a>. All rights reserved.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Copyright
