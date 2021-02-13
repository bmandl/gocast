import React from "react";

import "./title.scss";

export const Title = (props) => {
    return (
        <>
            <h1 className="page-title">{props.title}</h1>
            <p className="crumbread">
                <a href="#">Home</a> / <a href="">About</a>
            </p>
        </>
    )
}