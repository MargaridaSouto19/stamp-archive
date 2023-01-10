import React from 'react'
import Filter from '../shared/Filter'
import filterList from './filtersList.json'
import styles from './filters-list.module.scss'

const FiltersList = () => {
  return (
    <div className={styles.filtersContainer}>
      <ul className={styles.mainOptions}>
        {filterList.map((item, index) => (
          <Filter key={index} filter={item} />
        ))}
      </ul>
    </div>
  )
}

export default FiltersList