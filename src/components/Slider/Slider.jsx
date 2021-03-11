/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import useCarousel from '../../services/hooks/useCarousel/useCarousel';
import Card from '../Card/Card';

import './slider.scss';

const Slider = ({ title, slides, interval = 5000 }) => {
  const cards = slides.map((slide) => <Card data={slide} key={slide.id} />);
  const { length } = slides;
  const [active, setActive, handlers, style] = useCarousel(length, interval);
  return (
    length > 0 && (
      <div className="slider-container">
        <h2>{title}</h2>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div className="slider" {...handlers} style={style}>
          {cards[cards.length - 1]}
          {cards}
          {cards[0]}
        </div>
        <div className="arrows">
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowLeft}
            onClick={() => setActive(active - 1)}
          />
          <FontAwesomeIcon
            className="arrow"
            icon={faArrowRight}
            onClick={() => setActive(active + 1)}
          />
        </div>
      </div>
    )
  );
};

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf({
    id: PropTypes.string,
    excerpt: PropTypes.string,
    frontmatter: PropTypes.objectOf({
      author: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      location: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
  interval: PropTypes.number,
};

Slider.defaultProps = {
  slides: 0,
  interval: 5000,
};

export default Slider;
