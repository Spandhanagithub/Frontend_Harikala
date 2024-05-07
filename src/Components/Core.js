import React, { useState } from 'react';
import styles from './core.module.css';
import image9 from './images/image9.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

const Core = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.value} onClick={() => handleImageClick(image2)}>
          <img src={image2} alt="Integrity" className={styles.image} />
          {selectedImage === image2 && (
            <p>We uphold the highest ethical standards, prioritize transparency, and always act in the best interest of our investors and portfolio companies.</p>
          )}
        </div>
        <div className={styles.value} onClick={() => handleImageClick(image3)}>
          <img src={image3} alt="Collaboration" className={styles.image} />
          {selectedImage === image3 && (
            <p>We believe in the power of collaboration and strive to build strong partnerships with entrepreneurs, co-investors, and industry experts to achieve mutual success.</p>
          )}
        </div>
        <div className={styles.value} onClick={() => handleImageClick(image4)}>
          <img src={image4} alt="Accountability" className={styles.image} />
          {selectedImage === image4 && (
            <p>We take ownership of our decisions and actions, holding ourselves accountable for delivering results and creating value for all stakeholders.</p>
          )}
        </div>
        <div className={styles.value} onClick={() => handleImageClick(image5)}>
          <img src={image5} alt="Empowerment" className={styles.image} />
          {selectedImage === image5 && (
            <p>We empower entrepreneurs to realize their full potential by providing not only financial support but also mentorship, resources, and strategic guidance.</p>
          )}
        </div>
        <div className={styles.value} onClick={() => handleImageClick(image9)}>
          <img src={image9} alt="Innovation" className={styles.image} />
          {selectedImage === image9 && (
            <p>We embrace and drive innovation by investing in cutting-edge technologies and disruptive business models that have the potential to shape the future.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Core;
