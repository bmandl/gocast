import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../Logo/Logo';
import Button from '../../../Button/Button';

import './navigation.scss';

const Navigation = () => {
  const donate = <FontAwesomeIcon icon={faPaypal} key={0} />;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsOpening, setMenuIsOpening] = useState(false);
  const [menuIsClosing, setMenuIsClosing] = useState(false);

  const toggleMenu = () => {
    if (!menuIsOpen) {
      setMenuIsClosing(false);
      setMenuIsOpening(true);
      setTimeout(() => {
        setMenuIsOpen(true);
      }, 1000);
    } else {
      setMenuIsOpening(false);
      setMenuIsClosing(true);
      setTimeout(() => {
        setMenuIsOpen(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className={`overlay ${menuIsOpening ? 'overlay-visible' : ''}`} />
      <nav className="navigation">
        <FontAwesomeIcon
          icon={menuIsOpen ? faTimes : faBars}
          className={`menu-icon ${
            // eslint-disable-next-line no-nested-ternary
            menuIsOpening ? 'menu-icon-open' : menuIsClosing ? 'menu-icon-close' : ''
          }`}
          onClick={toggleMenu}
        />
        <Logo />
        <ul className={`menu ${menuIsOpening ? 'menu-open' : ''}`}>
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/episodes">Episodes</Link>
          </li>
          <li className="menu-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu-item">
            <Link to="/">Pages</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="cta-top">
          <Button styling="primary" text="Subscribe" />
          <Button styling="secondary" text={['Donate ', donate]} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
