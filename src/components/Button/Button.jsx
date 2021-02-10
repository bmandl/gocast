import React from "react";

import "./_button.scss";

export const Button = (props) => {
    return (
        <button className={`btn btn-${props.type}`}>{props.text}</button>
    )
}