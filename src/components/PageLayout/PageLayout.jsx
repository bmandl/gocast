import React from "react";
import { Header } from "../Header/Header";
import {Footer } from "../Footer/Footer";

export default (props) => {
    return (
        <>
            <Header {...props}/>
            {props.children}
            <Footer />
        </>
    )
} 