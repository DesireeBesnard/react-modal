import React from "react"

const overlayStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
}

const Overlay = ({onClick}) => {

  return (
    <div onClick={onClick} style={overlayStyle}></div>
  )
}

export default Overlay