import React from "react";
import { Button } from "../Button/Button";

import "./card.scss";

export const Card = (props) => {
    return (
        <div className="post-card">
            <div className="meta-data">
                <span className="author">{props.data.frontmatter.author}</span>
                <span className="date">{props.data.frontmatter.date}</span>
                <span className="location">{props.data.frontmatter.location}</span>
            </div>
            <h3>{props.data.frontmatter.title}</h3>
            <p>{props.data.excerpt}</p>
            <div className="read-more"><Button style="secondary" text="Read more" /></div>
        </div>
    )
}