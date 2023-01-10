import React from 'react'
import PropTypes from 'prop-types';
import styles from './layout.module.scss'
import NavBar from '../NavBar';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>
        {children}
      </main>
      {/* Aqui pode levar o footer */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout