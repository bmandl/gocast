import React from "react";
import {AudioPlayer} from "../../../AudioPlayer/AudioPlayer";

import "./_episode.scss";

export const Episode = (props) => {
    return (
        <div className="episode">
            <img src={props.image} />
            <div className="episode-content">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <AudioPlayer audio={props.audio} />
            </div>
            <div className="meta"><span className="tag">{`Season ${props.season}`}</span><span className="tag">{`Posted on ${props.date}`}</span><span className="tag">{props.tags.join(" / ")}</span></div>
        </div>
    )
}