import React from 'react';

import '../../../Styles/UI/Modal/Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show}/>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </div>
        
    )
}

export default Modal;