import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import styles from './stamps-gallery.module.scss';

import Stamp from '../Stamp';

const StampsGallery = ({ updatedFilters, handleStamp }) => {
  const [availableStamps, setAvailableStamps] = useState([]);

  const { data: posts } = useFetch({
    method: 'getPosts',
    query: '?_embed&per_page=100',
  });
  const { data: media } = useFetch({
    method: 'getMedia',
    query: '?_embed&per_page=100',
  });

  useEffect(() => {
    if (posts) {
      setAvailableStamps(posts);
    }
    if (availableStamps !== []) {
      setAvailableStamps((prevData) => {
        const newData = prevData?.map((stamp, index) => {
          return { ...stamp.acf, image: media[index]?.source_url };
        });
        return newData;
      });
    }
  }, [posts]);

  useEffect(() => {
    if (updatedFilters.length === 0) {
      setAvailableStamps([]);
    } else {
      const filteredStamps = availableStamps.filter((stamp) =>
        updatedFilters.every((filter) => {
          // check if the current filter type exists in the stamp
          if (stamp.hasOwnProperty(filter.type)) {
            // check if the current filter value exists in the stamp
            return (
              filter.values.length === 0 ||
              filter.values.includes(stamp[filter.type])
            );
          }
          // if the filter type does not exist in the stamp, we assume it matches the filter
          return true;
        })
      );
      // Update the state with the filtered stamps
      setAvailableStamps(filteredStamps);
    }
  }, [updatedFilters]);

  return (
    <div className={styles.stampsGrid}>
      {availableStamps !== [] &&
        availableStamps.map((stamp, index) => (
          <Stamp item={stamp} post={posts[index]} key={index} handleStamp={handleStamp} />
        ))}
    </div>
  );
};

export default StampsGallery;
