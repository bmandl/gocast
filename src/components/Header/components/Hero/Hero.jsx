import React from "react";
import "./style.scss";
import hero from "./img/header-img.png";
import { AudioPlayer } from "../../../AudioPlayer/AudioPlayer";

export const Hero = () => {
    return (
    <>
    <div className="hero">
        <div className="orange-text"><span>Trending Episode</span></div>
        <h1>Dreams of an unique ideas scattered through a deserted.</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <AudioPlayer />
    </div>
    <img src={hero} className="big-image" />
    </>
    )
}