import React from 'react'
import Layout from '../../components/Layout'
import styles from './about.module.scss'
import Link from '../../components/shared/Link'
import { aboutPicture } from '../../images'

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Link href='./' text='&lt;back' variant="tertiary" backBtn />
        <div className={styles.left}>
          <img src={aboutPicture} alt="stamp-photo"></img>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <h3>about the project</h3>
              <p>In the scope of the web development course, the creation of an editorial website was proposed, from which the stamp archive emerged. This is, as the name indicates, a stamp archive from various parts of the world where we can easily access information about each one.</p>
            </li>
            <li>
              <h3>the creators</h3>
              <p>We are students at the Faculty of Science and Technology of University of Coimbra, where we graduated in Design and Multimedia are completing our studies in the Masters in Design and Multimedia. </p>
            </li>
            <li>
              <h3>find us here</h3>
              <div className={styles.links}>
                <Link href='https://www.linkedin.com/in/inesgalvao06/' text='&gt;Inês Galvão' variant="secondary" />
                <Link href='https://www.behance.net/franciscasousa4?tracking_source=search_users|francisca%20sousa' text='&gt;Francisca Sousa' variant="secondary" />
                <Link href='https://www.linkedin.com/in/margarida-souto-684a041ba/' text='&gt;Margarida Souto' variant="secondary" />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}

export default About