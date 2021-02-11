import React, { useState } from "react";

import "./_carousel.scss";

export const Carousel = (props) => {
    const [feeds, getFeeds] = useState([
        "/images/75095@2x.png",
        "/images/mike-dorner-sf_1ZDA1YFw-unsplash@2x.png",
        "/images/1683@2x.png",
        "/images/2857@2x.png",
        "/images/sina-katirachi-sj5nVJSfYl4-unsplash@2x.png",
        "/images/451@2x.png",
        "/images/markus-spiske-UJwcQ3xeFHo-unsplash@2x.png",
        "/images/1841@2x.png",
        "/images/15@2x.png",
        "/images/1670@2x.png"
    ]);

    return (
        <div className="carousel-container">
            <h2>{props.title}</h2>
            <div className="feeds-box">
                {
                    feeds.map((feed, index) =>
                        <div className="feed"><img src={feed} />
                            <div className="overlay"><a href=""></a></div>
                        </div>)
                }
            </div>
        </div>
    )
}