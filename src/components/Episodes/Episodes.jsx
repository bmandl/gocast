import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Episode } from "./components/Episode/Episode";

import "./style.scss";

export const Episodes = (props) => {
    const [episodesData, getEpisodes] = useState([
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
    ])

    const episodes = episodesData.map((episode,index) =>
        <Episode key={index} title={episode.title} text={episode.text} tags={episode.tags} img={episode.img} />
    )

    return (
        <div className="episodes-container">
            <div className="top">
                <h2 className={!props.latest ? "single" : undefined}>{props.title}</h2>
                {props.latest && <Button type="primary" text="View All" />}
            </div>
            {episodes}
            {props.latest &&
            <div className="more">
                <Button type="secondary" text="Show more episodes" />
            </div>}
        </div>
    )
}