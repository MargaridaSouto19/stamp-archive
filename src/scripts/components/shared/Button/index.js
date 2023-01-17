import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ text, type, variant, handler, isFullWidth }) => {
  return (
    <button
      type={!type ? 'button' : type}
      onClick={handler}
      className={`
        ${styles.button}
        ${isFullWidth && styles.fullWidth}
        ${
          !variant
            ? styles.primary
            : variant === 'secondary'
            ? styles.secondary
            : ''
        }`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  handler: PropTypes.func,
  isFullWidth: PropTypes.bool,
};

export default Button;
