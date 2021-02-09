import React from "react";
import ReactDOM from "react-dom";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {Episodes} from "../../components/Episodes/Episodes";

import "../style.scss";
import { Slider } from "../../components/Slider/Slider";
import { Carousel } from "../../components/Carousel/Carousel";

export const Home = () => {
    return (
        <>
        <Header hero />
        <Episodes title="Latest Episodes" latest={true} />
        <Slider title="Blog Posts" />
        <Carousel />
        <Footer />
        </>
    )
}

ReactDOM.render (<Home />, document.getElementById("body"));