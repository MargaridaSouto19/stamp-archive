import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './stamp.module.scss';

const Stamp = ({ item, post }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.stampCard}
      onClick={() => {
        navigate(`/${post.slug}`);
      }}
    >
      <img src={item?.image} />
    </button>
  );
};

Stamp.propTypes = {
  item: PropTypes.object,
};

export default Stamp;
