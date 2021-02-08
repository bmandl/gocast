import React from "react";
import {AudioPlayer} from "../../../AudioPlayer/AudioPlayer";

import "./style.scss";

export const Episode = (props) => {
    return (
        <div className="episode">
            <img src={props.img} />
            <div className="episode-content">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <AudioPlayer />
            </div>
            <div className="tags">{props.tags.map((tag,index) => <span className="tag" key={index}>{tag}</span>)}</div>
        </div>
    )
}