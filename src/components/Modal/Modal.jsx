import React from "react";
import Overlay from "../Overlay/index.jsx"
import PropTypes from 'prop-types'

const wrapperStyle = {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
   
const modalStyle = {
    maxWidth: '500px',
    width: '100%',
    border: '1px solid #ddd',
    zIndex: 1,
    position: 'relative',
    padding: '100px'
}
   
const closeBtnStyle = {
    position: 'absolute',
    right: '20px',
    top: '20px',
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer'
}

/* Receive three props:
*  children => modal content
*  show => boolean that handle state of modal (open/close)
*  handleCloseBtn => Parent component function to close the modal
*/
export const Modal = ({ children, show, handleCloseBtn }) => {
    return (
        <>
            {show && (
                <div className="wrapper" style={wrapperStyle}>
                    <Overlay onClick={handleCloseBtn} />
                    <div className="modal" style={modalStyle}>
                        <button className="modal-button" onClick={handleCloseBtn} style={closeBtnStyle}>
                        X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    show: PropTypes.bool,
    handleCloseBtn: PropTypes.func
}
