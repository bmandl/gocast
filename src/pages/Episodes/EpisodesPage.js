import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Episodes } from "../../components/Episodes/Episodes";
import {Subscribe} from "../../components/Subscribe/Subscribe";
import { Button } from "../../components/Button/Button";

import "./episodes.scss";

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
    },
    {
        id: 3,
        img: "/images/tower.png",
        title: "Visiting my best friend's city for first time",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
        tags: [
            "Season 1",
            "Posted on Sep 11, 2020",
            "audio / goodbyes / life"
        ]
    },
    {
        id: 4,
        img: "/images/field.png",
        title: "An interesting read I definitely recommend",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam , sed diam voluptua.",
        tags: [
            "Season 1",
            "Posted on Sep 11, 2020",
            "audio / goodbyes / life"
        ]
    }
]

ReactDOM.render([<Button style="primary" text="Subscribe" key="1" />, <Button style="secondary" text={["Donate ", <FontAwesomeIcon icon={faPaypal} />]} key="2" />], document.getElementById("cta-top"));
ReactDOM.render(<Episodes title="All Podcast Episodes" episodes={episodes} />, document.getElementById("latest"));
ReactDOM.render(<Subscribe />, document.getElementById("subscribe"));