import React from "react";

import "./button.scss";

export const Button = (props) => {
    return (
        <button type={props.type} className={`btn btn-${props.style} ${props.customClass}`} onClick={props.onClick}>{props.text}</button>
    )
}