import React from "react";
import { Header } from "../Header/Header";
import {Footer } from "../Footer/Footer";

export default (props) => {
    return (
        <>
            <Header title = {props.title} />
            {props.children}
            <Footer />
        </>
    )
} 