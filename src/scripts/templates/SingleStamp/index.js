import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../components/shared/Layout';
import Link from '../../components/shared/Link';
import styles from './singlestamp.module.scss';

const SingleStamp = () => {
  const [availablePosts, setAvailablePosts] = useState([]);
  const [availableMedia, setAvailableMedia] = useState([]);

  const [selectedStamp, setSelectedStamp] = useState({});

  const { stampSlug } = useParams();

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

  useEffect(() => {
    setSelectedStamp(availablePosts.find((f) => f.slug === stampSlug));
  }, [availablePosts]);

  const stampYear = selectedStamp?.acf?.year;
  const stampCountry = selectedStamp?.acf?.country;
  const stampDescription = selectedStamp?.acf?.description;
  const stampImageId = selectedStamp?.acf?.image;

  return (
    <Layout>
      <div className={styles.container}>
        <Link href="/" text="&lt;back" variant="secondary" backBtn />
        <div className={styles.left}>
          <img
            src={availableMedia.find((f) => f.id === stampImageId)?.source_url}
            alt="stamp-photo"
          ></img>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <h3>country</h3>
              <p>{stampCountry}</p>
            </li>
            <li>
              <h3>years</h3>
              <p>{stampYear}</p>
            </li>
            <li>
              <h3>price</h3>
              <p>{`${0}€`}</p>
            </li>
            <li>
              <h3>description</h3>
              <p>{stampDescription}</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SingleStamp;
