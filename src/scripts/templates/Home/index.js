import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
import Layout from '../../components/shared/Layout'
import StampsGallery from '../../components/StampsGallery';

function Home({ handleStampPage }) {
  const [customFilters, setCustomFilters] = useState([]);

  return (
    <Layout>
      <FiltersList updateFilters={setCustomFilters} />
      <StampsGallery updatedFilters={customFilters} handleStamp={handleStampPage} />
    </Layout>
  );
}

Home.propTypes = {
  handleStampPage: PropTypes.func,
};

export default Home;
