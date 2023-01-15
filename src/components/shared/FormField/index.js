import React from 'react'
import styles from './formfield.module.scss'
import PropTypes from 'prop-types';

const FormField = ({ label, placeholder, isFullWidth, textarea }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      {!textarea ? (
        <input
          placeholder={placeholder}
          type='text'
          className={`${isFullWidth && styles.fullWidth}`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          type='text'
          className={`${isFullWidth && styles.fullWidth}`}
        />
      )}
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isFullWidth: PropTypes.bool,
  textarea: PropTypes.bool,
};

export default FormField