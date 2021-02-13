import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../../components/Button/Button";

import "./post.scss";
import { Comments } from "../../components/Comments/Comments";

const comments = [
    {
        id: 0,
        author: "Anthony Lynch",
        image: "/images/profile.png",
        date: "15 June 2019",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
    },
    {
        id: 1,
        author: "Anthony Lynch",
        image: "/images/profile.png",
        date: "15 June 2019",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
    },
    {
        id: 3,
        author: "Anthony Lynch",
        image: "/images/profile.png",
        date: "15 June 2019",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
    }
];

ReactDOM.render([<Button style="primary" text="Subscribe" key="1" />, <Button style="secondary" text={["Donate ", <FontAwesomeIcon icon={faPaypal} />]} key="2" />], document.getElementById("cta-top"));
ReactDOM.render(<Comments comments={comments} />,document.getElementById("comments"));