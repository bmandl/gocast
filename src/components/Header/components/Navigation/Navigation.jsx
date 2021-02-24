import React from "react";
import {Logo} from '../../../Logo/Logo';
import {Button} from '../../../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaypal} from '@fortawesome/free-brands-svg-icons';

import "./navigation.scss";
import { Link } from "gatsby";

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
            <li className="menu-item"><Link to="/blog">Blog</Link></li>
            <li className="menu-item"><Link to="/">Pages</Link></li>
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="cta-top">
            <Button style="primary" text="Subscribe" />
            <Button style="secondary" text={["Donate ",donate]} />
        </div>
    </nav>
    )
}