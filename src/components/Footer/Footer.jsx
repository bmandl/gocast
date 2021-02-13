import React from "react";
import { Logo } from "../Logo/Logo";

import google from "./img/google-podcasts.png";
import apple from "./img/apple-podcasts.png";
import spotify from "./img/spotify.png";

import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faSkype } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="footer-top">
                    <div className="branding">
                        <Logo />
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt.</p>
            Socials
            <div className="socials">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} className="fa" /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa" /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} className="fa" /></a>
                            <a href="#"><FontAwesomeIcon icon={faSkype} className="fa" /></a>
                        </div>
                    </div>
                    <div id="pages" className="footer-column">
                        Pages
            <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Episode</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div id="episodes" className="footer-column">
                        Recent Episodes
            <ul>
                            <li><a href="#">Episode 1</a></li>
                            <li><a href="#">Episode 2</a></li>
                            <li><a href="#">Episode 3</a></li>
                            <li><a href="#">Episode 4</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        Listen My Podcasts Also In
            <ul>
                            <li><a href="#"><img src={google} /></a></li>
                            <li><a href="#"><img src={apple} /></a></li>
                            <li><a href="#"><img src={spotify} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-botom">
                    @2020 Themefisher All Rights Reserved | Design By : Themefisher.designer
    </div>
            </section>
        </>
    )
}