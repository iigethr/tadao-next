// Overlay

import Link from "next/link"

class Overlay extends React.Component {
  on(event) {
    event.preventDefault()
    const buttonOn = document.getElementById("overlay-on")
    const buttonOff = document.getElementById("overlay-off")
    const overlay = document.getElementById("overlay")
    // Buttons
    buttonOn.style.display = "none"
    buttonOff.style.display = "block"
    // Overlay
    overlay.style.display = "block"
    // overlay.style.visibility = "visible"
  }

  off(event) {
    event.preventDefault()
    const buttonOn = document.getElementById("overlay-on")
    const buttonOff = document.getElementById("overlay-off")
    const overlay = document.getElementById("overlay")
    // Buttons
    buttonOn.style.display = "block"
    buttonOff.style.display = "none"
    // Overlay
    overlay.style.display = "none"
    // overlay.style.visibility = "hidden"
  }

  componentDidMount() {
    const buttonOn = document.getElementById("overlay-on")
    const buttonOff = document.getElementById("overlay-off")
    if (buttonOn) {
      buttonOn.addEventListener("click", this.on)
    }
    if (buttonOff) {
      buttonOff.addEventListener("click", this.off)
    }
  }

  render () {
    return (
      <div>
        <Link href="#">
          <a onClick={this.on} className="link-m white overlay-button overlay-on center-h" id="overlay-on">Overlay</a>
        </Link>
        <div className="overlay" id="overlay">
          <Link href="#">
            <a onClick={this.off} className="link-m white overlay-button overlay-off center-h" id="overlay-off">Close Overlay</a>
          </Link>
          <p className="left">Curabitur blandit tempus porttitor. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus.</p>
        </div>
      </div>
    )
  }
}

export default Overlay
