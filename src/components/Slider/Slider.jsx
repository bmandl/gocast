import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card } from "../Card/Card";

import "./slider.scss";

export const Slider = (props) => {
    const [cardData, getData] = useState([
        {
            id: 0,
            title: "Global News Podcast Thai soldier kills many people a shooting rampage",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
            meta: {
                author: "Mehedi Hasan",
                date: "Sep 11, 2020",
                location: "Cantonese Radio"
            }
        },
        {
            id: 0,
            title: "News hour - World Health Organization says a new coronavirus cases slowed",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
            meta: {
                author: "Mehedi Hasan",
                date: "Sep 11, 2020",
                location: "Cantonese Radio"
            }
        },
        {
            id: 0,
            title: "Over to You - Programme face the axe substantial financial cutbacks",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ………..",
            meta: {
                author: "Mehedi Hasan",
                date: "Sep 11, 2020",
                location: "Cantonese Radio"
            }
        }
    ]);

    const cards = cardData.map((card, index) => <Card data={card} key={index} />);

    return (
        <div className="slider-container">
            <h2>{props.title}</h2>
            <div className="slider">
                {cards}
            </div>
            <div className="arrows">
                <a href=""><FontAwesomeIcon icon={faArrowLeft} /></a>
                <a href=""><FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
        </div>
    )
}