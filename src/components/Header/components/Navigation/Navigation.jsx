import React, { useRef, useState } from "react";
import { Logo } from '../../../Logo/Logo';
import { Button } from '../../../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import "./navigation.scss";
import { Link } from "gatsby";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
    const donate = <FontAwesomeIcon icon={faPaypal} key={0} />;
    const refOverlay = useRef(null);
    const refMenu = useRef(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = (e) => {

        if (!menuIsOpen) {
            refOverlay.current.style.left = 0;            
            e.target.style.transform = "translateX(calc(100vw - 150px))";
            console.log(e.target.style.transform);
            refMenu.current.style.right = 0;
            refMenu.current.style.left = 0;
            setTimeout(() => {
                setMenuIsOpen(true);
            }, 1000);
        }

        else {
            refOverlay.current.style.left = "-100%";
            refOverlay.current.style["transition-delay"] = "0.4s";
            e.target.style.transform = "translateX(0)";
            e.target.style["transition-delay"] = "0.5s";
            console.log(e.target.style.transform);
            refMenu.current.style.right = "-100%";
            refMenu.current.style.left = "100%";
            refMenu.current.style["transition-delay"] = "0s";
            setTimeout(() => {
                setMenuIsOpen(false);
            }, 1000);
        }

        
    }

    return (
        <>
            <div ref={refOverlay} className="overlay"></div>
            <nav className="navigation">
                <FontAwesomeIcon icon={menuIsOpen ? faTimes : faBars} className="menu-icon" onClick={toggleMenu} />
                <Logo />
                <ul className="menu" ref={refMenu}>
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