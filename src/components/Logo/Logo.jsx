/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './logo.scss';
import logo from './img/logo.svg';

const Logo = () => (
  <>
    <a href="#" className="logo">
      <img src={logo} alt="logo" />
      <h1>Gocast</h1>
    </a>
  </>
);

export default Logo;
