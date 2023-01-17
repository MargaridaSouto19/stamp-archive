import React, { useState } from 'react';
import FormField from '../../components/shared/FormField';
import Link from '../../components/shared/Link';
import Button from '../../components/shared/Button';
import Layout from '../../components/shared/Layout';
import styles from './contactus.module.scss';

const ContactUs = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="./" text="&lt;back" variant="secondary" backBtn />
        </div>
        <div className={styles.right}>
          <h2>leave us a message!</h2>
          <div className={styles.personalInfo}>
            <FormField
              label="name"
              name="name"
              placeholder="write your name here..."
              onChange={changeHandler}
            />
            <FormField
              label="email"
              name="email"
              placeholder="write your email here..."
              onChange={changeHandler}
            />
          </div>
          <FormField
            label="message"
            name="message"
            placeholder="write your message here..."
            isFullWidth
            textarea
            onChange={changeHandler}
          />
          <Button type="submit" text="send" isFullWidth variant="secondary" />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
