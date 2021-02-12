import React from "react";
import ReactDOM from "react-dom";

import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Button } from "../../components/Button/Button";
import { Episodes } from "../../components/Episodes/Episodes";
import { Slider } from "../../components/Slider/Slider";
import { Carousel } from "../../components/Carousel/Carousel";
import { Subscribe } from "../../components/Subscribe/Subscribe";

const episodes = [
    {
        id: 0,
        img: "/images/dog.png",
        title: "Visiting my best friend's city for first time",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
        tags: [
            "Season 1",
            "Posted on Sep 3, 2020",
            "audio / goodbyes / life"
        ]
    },
    {
        id: 1,
        img: "/images/book.png",
        title: "An interesting read I definitely recommend",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
        tags: [
            "Season 1",
            "Posted on July 29, 2020",
            "audio / goodbyes / life"
        ]
    },
    {
        id: 2,
        img: "/images/door.png",
        title: "What if all my adventures go back home?",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
        tags: [
            "Season 1",
            "Posted on Sep 11, 2020",
            "audio / goodbyes / life"
        ]
    }
]

ReactDOM.render([<Button style="primary" text="Subscribe" key="1" />, <Button style="secondary" text={["Donate ", <FontAwesomeIcon icon={faPaypal} />]} key="2" />], document.getElementById("cta-top"));
ReactDOM.render(<AudioPlayer />, document.getElementById("audio-player"));
ReactDOM.render(<Episodes latest episodes={episodes} title="Latest Episodes" />, document.getElementById("latest"));
ReactDOM.render(<Slider title="Blog Posts" />, document.getElementById("slider"));
ReactDOM.render(<Carousel title="Instagram Feeds" />, document.getElementById("carousel"));
ReactDOM.render(<Subscribe />, document.getElementById("subscribe"));