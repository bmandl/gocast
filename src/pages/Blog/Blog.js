import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {Subscribe} from "../../components/Subscribe/Subscribe";
import { Button } from "../../components/Button/Button";
import {CardGrid} from "../../components/CardGrid/CardGrid";

import "./blog.scss";

const blogData = [
{
    id: 0,
    title: "Global News Podcast Thai soldier kills many people a shooting rampage",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Rose Lucas",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
},
{
    id: 1,
    title: "News hour - World Health Organization says a new coronavirus cases slowed",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Eliza Ortiz",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
},
{
    id: 2,
    title: "Over to You - Programme face the axe substantial financial cutbacks",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Carol Smith",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
},
{
    id: 3,
    title: "Global News Podcast Thai soldier kills many people a shooting rampage",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Rose Lucas",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
},
{
    id: 4,
    title: "News hour - World Health Organization says a new coronavirus cases slowed",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Eliza Ortiz",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
},
{
    id: 5,
    title: "Over to You - Programme face the axe substantial financial cutbacks",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
    meta: {
        author: "Carol Smith",
        date: "Sep 11, 2020",
        location: "Cantonese Radio"
    }
}
];

ReactDOM.render([<Button style="primary" text="Subscribe" key="1" />, <Button style="secondary" text={["Donate ", <FontAwesomeIcon icon={faPaypal} />]} key="2" />], document.getElementById("cta-top"));
ReactDOM.render(<CardGrid data={blogData} />, document.getElementById("grid-container"));
ReactDOM.render(<Subscribe />, document.getElementById("subscribe"));