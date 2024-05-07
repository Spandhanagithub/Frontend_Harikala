// Footer.js

import React from 'react';
import styles from './footer.module.css';

import TwitterIcon from './svg/twitter-x-logo-black-square-20853.svg';
import FacebookIcon from './svg/facebook-5213.svg';
import BehanceIcon from './svg/behance-106.svg';
import InstagramIcon from './svg/instagram-logo-3286.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2 className={styles.heading}>About Us</h2>
          <p>HariKala Venture Management supports startups with strategic planning, 
            financial management, and operational efficiency. </p>
          <p>Their experienced team empowers businesses 
            to navigate challenges and seize opportunities for growth, 
            fostering innovation and driving impactful change in the marketplace.</p>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Our Journey</h2>
          <ul>
            <li>Innovation</li>
            <li>People Safety</li>
            <li>Quality Control</li>
            <li>Geographic Connection</li>
            <li>Investor Relation</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Useful Links</h2>
          <ul>
            <li>Our Partners</li>
            <li>List of Other Businesses</li>
            <li>Pay Online</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Website Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p>Headquarter</p>
          <p>General Helpline</p>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className={styles.icon} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          <img src={BehanceIcon} alt="Behance" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className={styles.icon} />
        </a>
      </div>
      <div className={styles.middle}>
        <p>Copyright @2030</p>
      </div>
      <div className={styles.middletwo}>
        <p>HariKala Venture Management Limited, All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
