import React from 'react';
import styles from './what.module.css';

const What = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.headingthree} ${styles.shadow}`}>What We Do</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Investment Partnerships:</h2>
          <p className={styles.animated}>We invest in promising start-ups and companies with groundbreaking ideas, helping them grow and succeed in today’s competitive market.</p>
        </div>
        <div className={styles.card}>
          <h2>Mentorship and Guidance:</h2>
          <p className={styles.animated}>Our team of experienced professionals offers valuable insights, resources, and mentorship to young entrepreneurs looking to turn their ideas into successful businesses.</p>
        </div>
        <div className={styles.card}>
          <h2>Sector Expertise:</h2>
          <p className={styles.animated}>With a diverse portfolio spanning various industries, we bring a wealth of knowledge and experience to the table, helping businesses thrive in any sector.</p>
        </div>
      </div>
    </div>
  );
}

export default What;
