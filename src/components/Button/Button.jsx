import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  submit, styling, customClass, onClick, text,
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    className={`btn btn-${styling} ${customClass}`}
  >
    {text}
  </button>
);

Button.propTypes = {
  submit: PropTypes.bool,
  styling: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  submit: false,
  styling: 'primary',
  customClass: '',
  onClick: '',
};
export default Button;
