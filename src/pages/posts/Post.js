import React, { useState } from "react";
import {Comments} from "../../components/Comments/Comments";

import "./post.scss";

export default () => {
    const [comments, getComments] = useState([
        {
            id: 0,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        },
        {
            id: 1,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        },
        {
            id: 3,
            author: "Anthony Lynch",
            image: "/images/profile.png",
            date: "15 June 2019",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sdaa eirmod tempor invidunt ut labore et ."
        }
    ]);

    return (
        <>
            <section className="post-content">

                <h2>Over to You - Programmer face the substantial
            financial cutbacks</h2>
                <div className="meta-data">
                    <span className="author">Mehedi Hasan</span>
                    <span className="date">Sep 11, 2020</span>
                    <span className="location">Cantonese Radio</span>
                </div>
                <div className="post-text">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>

                    <p>aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata
                sanctus est Lorem ipsum dolor sit amet.</p>

                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                    delenit
                    augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilis</p>

                    <div className="quote">
                        And yes, it does attach an image of you selecting a text on Medium
                        instead of just quoting the text. What a mess with image & blog.
            </div>
                    <h3>
                        The reasons why Programmer face the substantial financial cutbacks
            </h3>
                    <p>It is needless to say that adding YouTube videos is easy, but if you desire to add a YouTube video gallery on
                    your
                WordPress website, you will need a YouTube video gallery plugin.</p>
                    <ul className="orange-bullet">
                        <li>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                        website,
                        you must have to use a video plugin.Video gallery plugin will optimize video loading for SEO and speed.
                </li>
                        <li>Video gallery plugin will optimize video loading for SEO and speed along with showing YouTube video in a
                    gallery.</li>
                        <li>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                        website,
                        you must have to use a video plugin.Video gallery plugin will optimize video loading for SEO and speed.
                </li>
                        <li>Video gallery plugin will optimize video loading for SEO and speed along with showing YouTube video in a
                    gallery.</li>
                        <li>Generally if you want to add more than 3 videos to demonstrate on a single page of your WordPress
                        website,
                        you must have to use a video plugin.Video gallery plugin will optimize video loading for SEO and speed.
                </li>
                    </ul>
                </div>
            </section>
            <Comments comments={comments} />
        </>
    )
}