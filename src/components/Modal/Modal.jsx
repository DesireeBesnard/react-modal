import React from "react";
import Overlay from "../Overlay/index.jsx"

const wrapperStyle = {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0
}
   
const modalStyle = {
    maxWidth: '500px',
    width: '100%',
    border: '1px solid #ddd',
    margin: '100px auto 0',
    zIndex: 1,
    position: 'relative',
    padding: '10px'
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

export const Modal = ({ children, show, handleCloseBtn }) => {
    return (
        <>
            {show && (
                <div style={wrapperStyle}>
                    <Overlay onClick={handleCloseBtn} />
                    <div style={modalStyle}>
                        <button onClick={handleCloseBtn} style={closeBtnStyle}>
                        X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
