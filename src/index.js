import React from "react"
import { hydrate, render } from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import {About} from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import {EpisodesPage } from "./pages/Episodes/EpisodesPage";
import {Home} from "./pages/Home/Home";
import { Post } from "./pages/Posts/Post";
import {ContactPage} from "./pages/Contact/ContactPage";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <Header title="About Me" page />
                    <About />
                    <Footer />
                </Route>
                <Route path="/episodes">
                    <Header title="Episodes" page />
                    <EpisodesPage />
                    <Footer />
                </Route>
                <Route path="/blog">
                    <Header title="Blog" page />
                    <Blog />
                    <Footer />
                </Route>
                <Route path="/post">
                    <Header />
                    <Post />
                    <Footer />
                </Route>
                <Route path="/contact">
                    <Header title="Contact" page />
                    <ContactPage />
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