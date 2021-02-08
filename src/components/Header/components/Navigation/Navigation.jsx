import React from "react";
import {Logo} from '../../../Logo/Logo';
import "./style.scss";

export const Navigation = () => {
    return(
    <>
    <nav className="navigation">
        <Logo />
        <div className="menu-mobile">
            <i className="fa fa-bars"></i>
        </div>
        <ul className="menu">
            <li className="menu-item"><a href="index.html">Home</a></li>
            <li className="menu-item"><a href="about.html">About</a></li>
            <li className="menu-item"><a href="episodes.html">Episode</a></li>
            <li className="menu-item"><a href="blog.html">Blog</a></li>
            <li className="menu-item"><a href="#">Pages</a></li>
            <li className="menu-item"><a href="contact.html">Contact</a></li>
        </ul>
        <div className="cta-top">
            <button className="btn btn-primary">Subscribe</button>
            <button className="btn btn-secondary donate"><i className="fa fa-paypal"></i> Donate</button>
        </div>
    </nav>
    </>
    )
}