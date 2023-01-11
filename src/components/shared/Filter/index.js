import React from 'react';
import styles from './filter.module.scss';

const Filter = ({
  filters,
  currentActive,
  setCurrentActive,
  setSelectedFilter,
}) => {
  const handleClick = (value) => {
    setCurrentActive && setCurrentActive(value);
  };
  const chooseFilter = (parent, value) => {
    setSelectedFilter &&
      setSelectedFilter({
        type: parent,
        filter: value,
      });
  };

  return (
    <ul className={styles.filterGroup}>
      {filters.map((item, index) => (
        <li
          key={index}
          className={currentActive === item.type ? styles.activeFilter : ''}
        >
          <button
            className={styles.filterBtn}
            onClick={() => {
              handleClick(item.type);
              currentActive === item.type && setCurrentActive('');
            }}
          >
            {item.type}
          </button>
          {currentActive === item.type && (
            <ul className={styles.extendedOptions}>
              {item.values.map((value, valueIndex) => (
                <li key={valueIndex}>
                  <button
                    onClick={() => chooseFilter(item.type, value)}
                    value={value}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
