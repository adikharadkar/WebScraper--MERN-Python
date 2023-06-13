import React from "react";

import '../Styles/InputField.css';

const InputField = (props) => {
    return (
        <input
            type={props.type}
            width={props.width}
            name={props.name}
            placeholder={props.placeholder}
            className="inputField"
            onChange={props.onChange}
            value={props.value}
        />
    );
}

export default InputField;