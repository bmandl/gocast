import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";

import '../style.scss';

export const About = () => {
    return (
        <>
            <Header title="About me" />
            <Slider title="Blog Posts" />
            <Footer />
        </>
    )
}

ReactDOM.render(<About />, document.getElementById("body"));