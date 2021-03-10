import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './card.scss';

const Card = ({ data }) => (
  <div className="post-card">
    <div className="meta-data">
      <span className="author">{data.frontmatter.author}</span>
      <span className="date">{data.frontmatter.date}</span>
      <span className="location">{data.frontmatter.location}</span>
    </div>
    <h3>{data.frontmatter.title}</h3>
    <p>{data.excerpt}</p>
    <div className="read-more">
      <Link to={`/blog/${data.frontmatter.slug}`}>
        <Button styling="secondary" text="Read more" />
      </Link>
    </div>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      location: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    }).isRequired,
    excerpt: PropTypes.string,
  }).isRequired,
};

export default Card;
