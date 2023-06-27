import React from 'react';

import '../Styles/Button.css';

const Button = (props) => {
    return (
        <input className='button' value={props.value} type={props.type} onClick={props.onClick} style={{width: props.width}} />
    )
}

export default Button;