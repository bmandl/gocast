import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Episode } from "./components/Episode/Episode";

import "./episodes.scss";

export const Episodes = (props) => {

    const {allEpisodesJson:{nodes:allEpisodes}} = useStaticQuery(graphql`
    {
      allEpisodesJson {
        nodes {
          title
          audio {
            publicURL
          }
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

  // Create array of Episode components from list of json data episodes
    const createEpisodes = (arr) => arr.map((episode) => <Episode key={episode.id} {...episode} image={episode.image.publicURL} audio={episode.audio.publicURL} />);

    // State for the list with initial first 3 episodes
    const [episodes,setEpisodes] = useState(createEpisodes([...allEpisodes.slice(0,3)]));

    // State to trigger load more
    const [loadMore, setLoadMore] = useState(false);

    // State whether there is more to load
    const [hasMore,setHasMore] = useState(allEpisodes.length > 3);

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true);
    }

    // Handle loading more episodes
    useEffect(() => {
        if(loadMore && hasMore) {
            const currentLength = episodes.length
            const isMore = currentLength < allEpisodes.length
            const nextResults = isMore ? allEpisodes.slice(currentLength, currentLength + 3) : []
            setEpisodes([...episodes, ...createEpisodes([...nextResults])])
            setLoadMore(false)
        }
    },[loadMore, hasMore]);

    //Check if there is more
    useEffect(() => {
        const isMore = episodes.length < allEpisodes.length
        setHasMore(isMore)
    }, [episodes])

    return (        
        episodes.length ? 
        <section className="episodes-container">
            <div className="top">
                <h2 className={!props.latest ? "single" : undefined}>{props.title}</h2>
                {props.latest && <Button style="primary" text="View All" onClick={() => navigate("/episodes")}/>}
            </div>
            {episodes}
            {hasMore &&
            <div className="more">
                <Button style="secondary" text="Show more episodes" onClick={handleLoadMore} />
            </div>}
        </section>
        : null
    )
}