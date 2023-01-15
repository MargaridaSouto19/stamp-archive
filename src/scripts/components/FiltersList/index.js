import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';
import Filter from '../shared/Filter';
import filterList from './filtersList.json';
import styles from './filters-list.module.scss';

const FiltersList = ({ updateFilters }) => {
  const [activeFilter, setActiveFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState({});
  const [customFilters, setCustomFilters] = useState([
    { type: 'color', values: [] },
    { type: 'country', values: [] },
    { type: 'year', values: [] },
    { type: 'size', values: [] },
    { type: 'type', values: [] },
    { type: 'text', values: [] },
  ]);

  useEffect(() => {
    const prevFilters = [...customFilters];

    prevFilters.forEach((filter) => {
      if (filter.type === selectedFilter.type) {
        if (!filter.values.includes(selectedFilter.filter)) {
          filter.values.push(selectedFilter.filter);
        }
      }
    });
    updateFilters(prevFilters);
  }, [selectedFilter]);

  return (
    <div className={styles.filtersContainer}>
      <Filter
        filters={filterList}
        currentActive={activeFilter}
        setCurrentActive={setActiveFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Button text="clear filters" isFullWidth />
    </div>
  );
};

export default FiltersList;
