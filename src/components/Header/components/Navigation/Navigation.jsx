import React, { useState } from "react";
import { Logo } from '../../../Logo/Logo';
import { Button } from '../../../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import "./navigation.scss";
import { Link } from "gatsby";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
    const donate = <FontAwesomeIcon icon={faPaypal} key={0} />;
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [menuIsOpening,setMenuIsOpening] = useState(false);
    const [menuIsClosing,setMenuIsClosing] = useState(false);

    const toggleMenu = (e) => {

        if (!menuIsOpen) {
            setMenuIsClosing(false);
            setMenuIsOpening(true);
            setTimeout(() => {
                setMenuIsOpen(true);
            }, 1000);
        }

        else {
            setMenuIsOpening(false);
            setMenuIsClosing(true);
            setTimeout(() => {
                setMenuIsOpen(false);
            }, 1000);
        }

        
    }

    return (
        <>
            <div className={`overlay ${menuIsOpening? "overlay-visible": ""}`}></div>
            <nav className="navigation">
                <FontAwesomeIcon icon={menuIsOpen ? faTimes : faBars} className={`menu-icon ${menuIsOpening? "menu-icon-open": menuIsClosing? "menu-icon-close" : ""}`} onClick={toggleMenu} />
                <Logo />
                <ul className={`menu ${menuIsOpening? "menu-open": ""}`}>
                    <li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item"><Link to="/about">About</Link></li>
                    <li className="menu-item"><Link to="/episodes">Episodes</Link></li>
                    <li className="menu-item"><Link to="/blog">Blog</Link></li>
                    <li className="menu-item"><Link to="/">Pages</Link></li>
                    <li className="menu-item"><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="cta-top">
                    <Button style="primary" text="Subscribe" />
                    <Button style="secondary" text={["Donate ", donate]} />
                </div>
            </nav>
        </>
    )
}