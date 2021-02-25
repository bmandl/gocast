import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Episode } from "./components/Episode/Episode";

import "./episodes.scss";

export const Episodes = (props) => {

    const {allEpisodesJson:{nodes:episodesData}} = useStaticQuery(graphql`
    {
      allEpisodesJson {
        nodes {
          title
          audio
          date(formatString: "MMM D, YYYY")
          tags
          text
          season
          image {
            publicURL
          }
        }
      }
    }
  `);
  console.log(episodesData);
  
    const episodes = episodesData.map((episode,index) =>
        <Episode key={index} {...episode} image={episode.image.publicURL} />
    )

    return (        
        episodes.length ? 
        <section className="episodes-container">
            <div className="top">
                <h2 className={!props.latest ? "single" : undefined}>{props.title}</h2>
                {props.latest && <Button style="primary" text="View All" />}
            </div>
            {episodes}
            {props.latest &&
            <div className="more">
                <Button style="secondary" text="Show more episodes" />
            </div>}
        </section>
        : null
    )
}