import React from "react";
import "./style.scss";
import logo from "./img/logo.svg";

export const Logo = () => {
    return (
        <>
        <a href="#" className="logo">
            <img src={logo} />
            <h1>Gocast</h1>
        </a>
        </>
    )
}