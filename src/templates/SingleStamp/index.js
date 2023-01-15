import React from 'react'
import Layout from '../../components/Layout'
import Link from '../../components/shared/Link'
import styles from './singlestamp.module.scss'
import { stamp } from '../../images'

const SingleStamp = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Link href='./' text='&lt;back' variant="secondary" backBtn />
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
              <p>none</p>
            </li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}

export default SingleStamp