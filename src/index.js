import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Episodes} from "./components/Episodes/Episodes";

import "./style.scss";

export const App = () => {
    return (
        <>
        <Header />
        <Episodes title="Latest Episodes" latest={true} />
        <Footer />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById("body"));
