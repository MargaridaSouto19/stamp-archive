import React from 'react'
import { logo } from '../../images'
import styles from './navbar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href='/'><img src={logo} alt="stamp-archive-logo"></img></a>
      <div className={styles.links}>
        <ul>
          <li className={styles.link}><a href='/about'>about</a></li>
          <li className={styles.link}><a href='/contactUs'>contact us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar