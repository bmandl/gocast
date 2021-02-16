import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { Slider } from "../../components/Slider/Slider";
import { Subscribe } from "../../components/Subscribe/Subscribe";

import './about.scss';

export default () => {
    return (
        <PageLayout title="About Me">
            <section class="about">
                <div class="about-text">
                    <h2>Hello There My Name is Gerry Castin And
            I Love To Talk (Most Of The Time)</h2>

                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                </div>
                <img src="/images/me.png" alt="" class="me" />
            </section>

            <section class="featured">
                <h2>I Have Been Featured in</h2>
                <ul class="brands">
                    <li><a href="#"><img src="/images/amara.svg" /></a></li>
                    <li><a href="#"><img src="/images/aven.svg" /></a></li>
                    <li><a href="#"><img src="/images/circle.svg" /></a></li>
                    <li><a href="#"><img src="/images/earth-2.0.svg" /></a></li>
                    <li><a href="#"><img src="/images/fox-hub.svg" /></a></li>
                    <li><a href="#"><img src="/images/goldline.svg" /></a></li>
                    <li><a href="#"><img src="/images/kanba.svg" /></a></li>
                    <li><a href="#"><img src="/images/kyan.svg" /></a></li>
                    <li><a href="#"><img src="/images/muzica.svg" /></a></li>
                    <li><a href="#"><img src="/images/nirastate.svg" /></a></li>
                    <li><a href="#"><img src="/images/treva.svg" /></a></li>
                </ul>
            </section>

            <section class="mailing">
                <h2>Directly Into Your Inbox Every Monday</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut dolore
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                <div class="video-container">
                    <FontAwesomeIcon icon={faPlayCircle} className="play-video" />
                    <img src="/images/video.png" alt="" class="video" />
                </div>
            </section>
            <Slider title="Blog Posts" />
            <Subscribe title="New Episode Every Week!" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed." />
        </PageLayout>
    )
}