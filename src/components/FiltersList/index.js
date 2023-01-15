import React, { useState, useEffect } from 'react';
import Filter from '../shared/Filter';
import filterList from './filtersList.json';
import styles from './filters-list.module.scss';
import Button from '../shared/Button';

const FiltersList = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [selectedFilter, setSelectedFilter] = useState({});
  const [choosedFilters, setChoosedFilters] = useState([
    { type: 'color', values: [] },
    { type: 'country', values: [] },
    { type: 'year', values: [] },
    { type: 'size', values: [] },
    { type: 'type', values: [] },
    { type: 'text', values: [] },
  ]);

  useEffect(() => {
    const prevFilters = [...choosedFilters];

    prevFilters.forEach((filter) => {
      if (filter.type === selectedFilter.type) {
        filter.values.push(selectedFilter.filter);
      }
    });
    setChoosedFilters(prevFilters);
  }, [selectedFilter]);

  console.log(choosedFilters);

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
