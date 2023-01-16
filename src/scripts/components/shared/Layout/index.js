import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import NavBar from '../NavBar';
import MobileNavigation from '../MobileNavigation';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <MobileNavigation />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
