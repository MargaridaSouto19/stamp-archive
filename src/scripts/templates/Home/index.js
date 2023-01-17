import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../../components/FiltersList';
import Layout from '../../components/shared/Layout';
import StampsGallery from '../../components/StampsGallery';

function Home() {
  const [customFilters, setCustomFilters] = useState([]);

  return (
    <Layout>
      <FiltersList updateFilters={setCustomFilters} />
      <StampsGallery updatedFilters={customFilters} />
    </Layout>
  );
}

Home.propTypes = {
  handleStampPage: PropTypes.func,
};

export default Home;
