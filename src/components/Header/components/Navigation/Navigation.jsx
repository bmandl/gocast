import React from "react";
import {Logo} from '../../../Logo/Logo';
import {Button} from '../../../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaypal} from '@fortawesome/free-brands-svg-icons';

import "./style.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
    const donate = <FontAwesomeIcon icon={faPaypal} key={0} />;
    return(
    <nav className="navigation">
        <Logo />
        <div className="menu-mobile">
            <i className="fa fa-bars"></i>
        </div>
        <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
            <li className="menu-item"><Link to="/episodes">Episodes</Link></li>
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