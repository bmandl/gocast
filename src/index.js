import React from "react"
import ReactDOM, { hydrate, render } from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import {About} from "./pages/About/About";
import {EpisodesPage } from "./pages/Episodes/EpisodesPage";
import {Home} from "./pages/Home/Home";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <Header title="About Me" />
                    <About />
                    <Footer />
                </Route>
                <Route path="/episodes">
                    <Header title="Episodes" />
                    <EpisodesPage />
                    <Footer />
                </Route>
                <Route exact path="/">
                    <Header hero />
                    <Home />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}
const rootElement = document.getElementById("body");
if(rootElement.hasChildNodes()) {
    hydrate(<App />,rootElement)
}
else
render(<App />, document.getElementById("body"));