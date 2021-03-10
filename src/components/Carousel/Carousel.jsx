/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './carousel.scss';

const Carousel = ({ title }) => {
  // feeds should be fetched from external source
  // eslint-disable-next-line no-unused-vars
  const [feeds, getFeeds] = useState([
    '/images/75095@2x.png',
    '/images/mike-dorner-sf_1ZDA1YFw-unsplash@2x.png',
    '/images/1683@2x.png',
    '/images/2857@2x.png',
    '/images/sina-katirachi-sj5nVJSfYl4-unsplash@2x.png',
    '/images/451@2x.png',
    '/images/markus-spiske-UJwcQ3xeFHo-unsplash@2x.png',
    '/images/1841@2x.png',
    '/images/15@2x.png',
    '/images/1670@2x.png',
  ]);

  return (
    <div className="carousel-container">
      <h2>{title}</h2>
      <div className="feeds-box">
        {feeds.map((feed, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="feed" key={index}>
            <img src={feed} />
            <div className="overlay">
              <a href="">
                <FontAwesomeIcon icon={faLink} className="link" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Carousel;
