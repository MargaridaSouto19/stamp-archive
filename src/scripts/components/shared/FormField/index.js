import React from 'react';
import styles from './formfield.module.scss';
import PropTypes from 'prop-types';

const FormField = ({
  label,
  placeholder,
  isFullWidth,
  textarea,
  onChange,
  name,
}) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      {!textarea ? (
        <input
          placeholder={placeholder}
          type="text"
          name={name}
          className={`${isFullWidth && styles.fullWidth}`}
          onChange={onChange}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          type="text"
          name={name}
          className={`${isFullWidth && styles.fullWidth}`}
          onChange={onChange}
        />
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isFullWidth: PropTypes.bool,
  textarea: PropTypes.bool,
};

export default FormField;
