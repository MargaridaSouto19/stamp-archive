import React from 'react'
import FormField from '../../components/shared/FormField'
import Link from '../../components/shared/Link'
import Button from '../../components/shared/Button'
import Layout from '../../components/Layout'
import styles from './contactus.module.scss'

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href='./' text='&lt;back' variant="secondary" backBtn />
        </div>
        <div className={styles.right}>
          <h2>leave us a message!</h2>
          <div className={styles.personalInfo}>
            <FormField
              label="name"
              placeholder="write your name here..."
            />
            <FormField
              label="email"
              placeholder="write your email here..."
            />
          </div>
          <FormField
            label="message"
            placeholder="write your message here..."
            isFullWidth
            textarea
          />
          <Button text="send" isFullWidth variant="secondary" />
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs