import React from "react";

import "./style.scss";

export const Button = (props) => {
    return (
        <button className={`btn btn-${props.type}`}>{props.text}</button>
    )
}