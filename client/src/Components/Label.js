import React from "react";

import '../Styles/Label.css';

const Label = (props) => {
    return (
        <label className="label">{props.inputText}</label>
    );
}

export default Label;