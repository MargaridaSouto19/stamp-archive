import React, { useState, useEffect } from 'react';
import styles from './stamps-gallery.module.scss';

import Stamp from '../Stamp';

const StampsGallery = ({ updatedFilters }) => {
  const [availablePosts, setAvailablePosts] = useState([]);
  const [availableMedia, setAvailableMedia] = useState([]);
  const [availableStamps, setAvailableStamps] = useState([]);

  // Posts and media fetching
  useEffect(() => {
    async function loadPosts() {
      const responsePosts = await fetch('/wp-json/wp/v2/posts');
      const posts = await responsePosts.json();
      setAvailablePosts(posts);
    }
    async function loadMedia() {
      const responseMedia = await fetch('/wp-json/wp/v2/media');
      const media = await responseMedia.json();
      setAvailableMedia(media);
    }
    loadPosts();
    loadMedia();
  }, []);

  // Attach images to the respective posts
  useEffect(() => {
    if (availablePosts) {
      setAvailableStamps(availablePosts);
    }
    if (availableStamps !== []) {
      setAvailableStamps((prevData) => {
        const newData = prevData?.map((stamp) => {
          return {
            ...stamp.acf,
            image: availableMedia.find((i) => i.id === stamp.acf.image)
              ?.source_url,
          };
        });
        return newData;
      });
    }
  }, [availablePosts, availableMedia]);

  // Filtering
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
              filter.values.includes(stamp[filter.type].toLowerCase())
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
          <Stamp item={stamp} post={availablePosts[index]} key={index} />
        ))}
    </div>
  );
};

export default StampsGallery;
