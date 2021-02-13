import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Hero} from "./components/Hero/Hero";
import {Title} from "./components/Title/Title";

import "./header.scss";

export const Header = (props) => {
    return (
    <section className={props.hero ? "header" : props.page ? "header-page" : "no-header"}>
        <Navigation />
        {props.hero && <Hero />}
        {props.title && <Title title={props.title} />}
    </section>
    )
}