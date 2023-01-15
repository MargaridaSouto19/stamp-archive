import React from 'react';
import PropTypes from 'prop-types';
import styles from './stamp.module.scss';

const Stamp = ({ item, post, handleStamp }) => {
  return (
    // <a className={styles.stampCard} href={post.link} onClick={() => handleStamp(item.id)}>
    //   <img src={item.image} />
    // </a>
    <a className={styles.stampCard} href={post.link} onClick={() => handleStamp(post)}>
      <img src={item.image} />
    </a>
  );
};

Stamp.propTypes = {
  item: PropTypes.object,
  handleStamp: PropTypes.func,
};

export default Stamp;
