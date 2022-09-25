import React from "react"

const overlayStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
}

//Modal background. Receive an onClic props (function) that will close it
const Overlay = ({onClick}) => {

  return (
    <div className="overlay" onClick={onClick} style={overlayStyle}></div>
  )
}

export default Overlay