import React from "react";
import "./style.scss";
import hero from "./img/header-img.png";

export const Hero = () => {
    return (
    <>
    <div className="hero">
        <div className="orange-text"><span>Trending Episode</span></div>
        <h1>Dreams of an unique ideas scattered through a deserted.</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <div className="audio-player">
            <i className="fa fa-play-circle play"></i>
            <span className="time">26.00</span>
            <div className="progress">
            </div>
            <span className="time">43.25</span>
            <i className="fa fa-volume-up controls"></i>
            <i className="fa fa-download controls"></i>
        </div>
    </div>
    <img src={hero} className="big-image" />
    </>
    )
}