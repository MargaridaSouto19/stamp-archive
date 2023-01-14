import React from 'react'
import Layout from '../../components/Layout'
import styles from './singlestamp.module.scss'
import { stamp } from '../../images'

const SingleStamp = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <a className={styles.back} href='/'>&lt;back</a>
        <div className={styles.left}>
          <img src={stamp} alt="stamp-photo"></img>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <h3>country</h3>
              <p>lorem ipsum</p>
            </li>
            <li>
              <h3>years</h3>
              <p>unknown</p>
            </li>
            <li>
              <h3>price</h3>
              <p>lorem ipsum</p>
            </li>
            <li>
              <h3>description</h3>
              <p>lorem ipsum dolor color sit amet lorem ipsum dolor color sit amet lorem ipsum dolor color sit amet lorem ipsum dolor color sit amet lorem ipsum dolor color sit ametlorem ipsum dolor color sit amet lorem ipsum dolor color sit amet lorem ipsum dolor color sit amet  </p>
            </li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}

export default SingleStamp