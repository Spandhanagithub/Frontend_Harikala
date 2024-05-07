// content.js

import React from 'react';
import styles from './content.module.css';

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <h1 className={styles.heading}>Transforming Ideas into Sustainable Businesses</h1>
      <p className={styles.paragraph}>
        At HariKala Venture Management, we believe in the power of innovation and entrepreneurship. <br/>
        We are a dynamic investment firm dedicated to supporting start-ups and companies across <br/>
        various sectors, empowering them to reach their full potential.
      </p>
    </div>
  );
}

export default Content;
