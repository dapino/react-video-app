import React from 'react'
import './modal.css'

const Modal = props => (
    <div className="Modal">
        { props.children }
        <button onClick={props.handleClick}>cerrar</button>
    </div>
)

export default Modal