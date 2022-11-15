import React from 'react'
import PropTypes from 'prop-types';
import styles from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.layout}>
      {/* Aqui importar um componente chamado Navbar */}
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      <main>
        {children}
      </main>
      {/* Aqui pode levar o footer */}
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element,
}

export default Layout