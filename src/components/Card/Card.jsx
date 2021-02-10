import React from "react";
import { Button } from "../Button/Button";

import "./_card.scss";

export const Card = (props) => {
    return (
        <div className="post-card">
            <div className="meta-data">
                <span className="author">{props.data.meta.author}</span>
                <span className="date">{props.data.meta.date}</span>
                <span className="location">{props.data.meta.location}</span>
            </div>
            <h3>{props.data.title}</h3>
            <p>{props.data.text}</p>
            <div className="read-more"><Button type="secondary" text="Read more" /></div>
        </div>
    )
}