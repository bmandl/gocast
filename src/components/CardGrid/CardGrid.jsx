import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './CardGrid.scss';

const CardGrid = ({ data }) => {
  // eslint-disable-next-line react/no-array-index-key
  const cards = data.map((card, index) => <Card data={card} key={index} />);

  return <div className="card-grid">{cards}</div>;
};

CardGrid.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default CardGrid;
