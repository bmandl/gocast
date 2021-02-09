import React from "react";
import {Logo} from '../../../Logo/Logo';
import {Button} from '../../../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaypal} from '@fortawesome/free-brands-svg-icons';

import "./style.scss";

export const Navigation = () => {
    const donate = <FontAwesomeIcon icon={faPaypal} key={0} />;
    return(
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
            <Button type="primary" text="Subscribe" />
            <Button type="secondary" text={["Donate ",donate]} />
        </div>
    </nav>
    )
}