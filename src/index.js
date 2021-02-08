import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import "./style.scss";

export const App = () => {
    return (
        <>
        <Header />
        <Footer />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById("body"));
