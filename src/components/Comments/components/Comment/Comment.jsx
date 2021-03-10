import React from 'react';
import PropTypes from 'prop-types';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../Button/Button';

import './comment.scss';

const Comment = ({
  image, author, text, date,
}) => (
  <div className="comment">
    <img src={image} alt="" className="profile-image" />
    <div className="comment-content">
      <h4 className="author">{author}</h4>
      <p className="text">{text}</p>
    </div>
    <Button
      styling="secondary"
      text={['Reply ', <FontAwesomeIcon icon={faShare} />]}
      customClass="reply"
    />
    <p className="date">{date.toDateString()}</p>
  </div>
);

Comment.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Comment;
