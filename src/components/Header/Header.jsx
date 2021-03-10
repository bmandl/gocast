import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Title from './components/Title/Title';

import './header.scss';

const Header = ({ hero, page, title }) => (
  // eslint-disable-next-line no-nested-ternary
  <section className={hero ? 'header' : page ? 'header-page' : 'no-header'}>
    <Navigation />
    {hero && <Hero />}
    {title && <Title title={title} />}
  </section>
);

Header.propTypes = {
  hero: PropTypes.bool,
  page: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  hero: false,
  page: true,
};

export default Header;
