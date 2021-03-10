/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './slider.scss';

const Slider = ({ title }) => {
  const cardData = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 3) {
        edges {
          node {
            excerpt
            frontmatter {
              author
              date(formatString: "MMM D, YYYY")
              location
              title
              slug
            }
          }
        }
      }
    }
  `);

  const cards = cardData.allMarkdownRemark.edges.map((card) => (
    <Card data={card.node} key={card.node.id} />
  ));
  return (
    <div className="slider-container">
      <h2>{title}</h2>
      <div className="slider">{cards}</div>
      <div className="arrows">
        <a href="">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

Slider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Slider;
