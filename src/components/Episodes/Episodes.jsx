import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Episode } from "./components/Episode/Episode";

import "./_episodes.scss";

export const Episodes = (props) => {
    const [episodesData, getEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes(props.episodes || []);
    },[])

    const episodes = episodesData.map((episode,index) =>
        <Episode key={index} title={episode.title} text={episode.text} tags={episode.tags} img={episode.img} />
    )

    return (        
        episodes.length ? 
        <section className="episodes-container">
            <div className="top">
                <h2 className={!props.latest ? "single" : undefined}>{props.title}</h2>
                {props.latest && <Button type="primary" text="View All" />}
            </div>
            {episodes}
            {props.latest &&
            <div className="more">
                <Button type="secondary" text="Show more episodes" />
            </div>}
        </section>
        : null
    )
}