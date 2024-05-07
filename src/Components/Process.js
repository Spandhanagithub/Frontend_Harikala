import React, { useState } from 'react';
import styles from './Process.module.css';

const Process = () => {
  const [showFirstThree, setShowFirstThree] = useState(true);
  const [showSecondThree, setShowSecondThree] = useState(false);
  const [showLastThree, setShowLastThree] = useState(false);

  const toggleSections = () => {
    if (showFirstThree) {
      setShowFirstThree(false);
      setShowSecondThree(true);
    } else if (showSecondThree) {
      setShowSecondThree(false);
      setShowLastThree(true);
    } else {
      setShowLastThree(false);
      setShowFirstThree(true);
    }
  };

  return (
    <div className={styles.container}>
      {showFirstThree && (
        <>
          <div className={styles.section}>
            <h2 className={styles.title}>Overview of the Company</h2>
            <p className={styles.description}>Highlight key information about the company, such as its name, mission statement, and global reach in various sectors.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Investment Sectors</h2>
            <p className={styles.description}>Show a breakdown of the different sectors the company invests in, such as technology, healthcare, energy, etc.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Global Presence</h2>
            <p className={styles.description}>Illustrate a world map or infographic showing the company's presence in various countries around the globe.</p>
          </div>
        </>
      )}
      {showSecondThree && (
        <>
          <div className={styles.section}>
            <h2 className={styles.title}>Sector Diversity</h2>
            <p className={styles.description}>Illustrate the breadth of sectors the company invests in, ranging from sustainability and social impact to cutting-edge technology and beyond.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Global Investment Presence</h2>
            <p className={styles.description}>Showcase the company's diverse investments in sectors worldwide, spanning technology, healthcare, finance, and more.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Passion for Problem-Solving</h2>
            <p className={styles.description}>Highlight the company's focus on supporting passionate entrepreneurs who are dedicated to addressing real-world challenges and improving people's lives.</p>
          </div>
        </>
      )}
      {showLastThree && (
        <>
          <div className={styles.section}>
            <h2 className={styles.title}>Passionate Entrepreneurs</h2>
            <p className={styles.description}>Feature profiles of passionate entrepreneurs who have partnered with the company to solve people's problems. Highlight their innovative solutions and success stories.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Success Stories</h2>
            <p className={styles.description}>Feature success stories of past investments and collaborations with entrepreneurs that have led to significant positive outcomes.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Entrepreneurial Partnership</h2>
            <p className={styles.description}>Emphasize the company's interest in collaborating with passionate entrepreneurs who are dedicated to creating innovative solutions for people's needs.</p>
          </div>
        </>
      )}
      <div className={styles.iconLeft} onClick={toggleSections}>
        <span>&lt;</span>
      </div>
      <div className={styles.iconRight} onClick={toggleSections}>
        <span>&gt;</span>
      </div>
    </div>
  );
}

export default Process;
