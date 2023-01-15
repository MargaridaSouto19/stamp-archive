import React from 'react'
import { logo } from '../../images'
import styles from './navbar.module.scss'
import Link from '../shared/Link'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href='/'><img src={logo} alt="stamp-archive-logo"></img></a>
      <div className={styles.links}>
        <ul>
          <li ><Link href='/about' text='about' /></li>
          <li ><Link href='/contactus' text='contact us' /></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar