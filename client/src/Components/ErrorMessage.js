import React from 'react';

import '../Styles/ErrorMessage.css';

const ErrorMessage = (props) => {
    return (
        <div className={props.message ? "errorDiv": ""}><span className={props.message ? "errorMessage": ""}>{props.message}</span></div>
    )
}

export default ErrorMessage;