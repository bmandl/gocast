import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './subscribe.scss';

const ButtonText = ({ text, icon }) => (
  <>
    {text}
    <FontAwesomeIcon icon={icon} />
  </>
);

ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ButtonText.defaultProps = {
  icon: '',
};

const Subscribe = ({ title, subtitle }) => (
  <section className="subscribe">
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <div className="cta-subscribe">
      <form action="">
        <input type="email" placeholder="Type Your Email" />
        <Button
          submit
          stylying="primary"
          text={<ButtonText text="Subscribe " icon={faArrowRight} />}
        />
      </form>
    </div>
  </section>
);

Subscribe.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Subscribe;
