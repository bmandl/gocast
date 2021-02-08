import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Hero} from "./components/Hero/Hero";
import {Title} from "./components/Title/Title";

import "./style.scss";

export const Header = (props) => {
    return (
    <div className={props.hero ? "header" : "header-page"}>
        <Navigation />
        {props.hero && <Hero />}
        {props.title && <Title title={props.title} />}
    </div>
    )
}