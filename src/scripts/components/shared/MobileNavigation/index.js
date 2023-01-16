import React, { useState } from 'react'
import { logo } from '../../../images'
import styles from './mobileNavigation.module.scss'
import Link from '../Link'
import { Squash as Hamburger } from 'hamburger-react'

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <a href='/'><img src={logo} alt="stamp-archive-logo"></img></a>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <ul>
            <li ><Link href='/about' text='about' variant='tertiary' /></li>
            <li ><Link href='/contact-us' text='contact us' variant='tertiary' /></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNavigation