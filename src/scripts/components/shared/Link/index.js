import React from 'react';
import PropTypes from 'prop-types';

import styles from './link.module.scss';

const Link = ({ text, variant, href, backBtn }) => {

  return (
    <a href={href}
      className={`
        ${styles.link}
        ${!variant ? styles.primary : variant === 'secondary' ? styles.secondary : variant === 'tertiary' ? styles.tertiary : ''}
        ${backBtn ? styles.backBtn : ''}`
      }
    >
      {text}
    </a >
  );
};

Link.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  href: PropTypes.string,
  backBtn: PropTypes.bool,
};

export default Link;