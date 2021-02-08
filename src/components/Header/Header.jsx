import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Hero} from "./components/Hero/Hero";
import "./style.scss";

export const Header = () => {
    return (
    <div className="header">
        <Navigation />
        <Hero />
    </div>
    )
}