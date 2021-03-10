/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ title }) => (
  <>
    <h1 className="page-title">{title}</h1>
    <p className="crumbread">
      <a href="#">Home</a>
      {' '}
      /
      <a href="">About</a>
    </p>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
