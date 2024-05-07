import React from 'react';
import styles from './Choose.module.css';

// Import your images
import image8 from './images/image8.jpg';

const Choose = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} style={{ backgroundImage: `url(${image8})` }}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h1>Why Choose HariKala Venture Management</h1>
            <div className={styles.item}>
              <h2 className={styles.subtitle}>Tailored Support:</h2>
              <p className={styles.description}>We provide personalized support and guidance to each of our partners, ensuring they have the tools they need to succeed.</p>
            </div>
            <div className={styles.item}>
              <h2 className={styles.subtitle}>Extensive Network:</h2>
              <p className={styles.description}>Benefit from our vast network of industry experts, investors, and partners to help your business reach new heights.</p>
            </div>
            <div className={styles.item}>
              <h2 className={styles.subtitle}>Long-term Growth:</h2>
              <p className={styles.description}>We are committed to fostering sustainable growth and long-term success for the businesses we invest in.</p>
            </div>
            <p className={styles.cta}>Ready to take your idea to the next level? Let HariKala Venture Management be your partner in success. Contact us today to learn more about how we can help you realize your entrepreneurial dreams.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
