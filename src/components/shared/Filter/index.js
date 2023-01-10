import React, { useState } from 'react'
import styles from './filter.module.scss'

const Filter = ({ filter }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li>
      <button
        className={!isActive ? styles.filterBtn : styles.activeFilter}
        onClick={() => setIsActive(!isActive)}
      >
        {filter.type}
      </button>
      {
        isActive && (
          <ul className={styles.extendedOptions}>
            {filter.values.map((value, valueIndex) => (
              <li key={valueIndex}>{value}</li>
            ))}
          </ul>
        )
      }
    </li >
  )
}

export default Filter