import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Menu from '../Components/Menu';
import LogoImage from './images/image1.jpg';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={LogoImage} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linksCont}>
          <div className={styles.menuItemone}>Downloads</div>
          <div className={styles.menuItemone}>LOGIN</div> 
        </div>
        <hr className={styles.separator} />
        <div className={styles.menuItem} onClick={toggleDropdown}>
          COMPANY
          <span className={styles.dropdownIcon}>&#x25BE;</span>
        </div>
        {dropdownOpen && (
          <div className={styles.dropdownContent}>
            <div>Company Information</div>
            <div>Management</div>
            <div>Leadership</div>
            <div>Ownership</div>
          </div>
        )}
        {/* Repeat the same structure for other menu items */}
        <div className={styles.menuItem}>CORE VALUES<span className={styles.dropdownIcon}>&#x25BE;</span></div>
        <div className={styles.menuItem}>SOCIAL RESPONSIBILITY<span className={styles.dropdownIcon}>&#x25BE;</span></div>
        <div className={styles.menuItem}>NEWSROOM<span className={styles.dropdownIcon}>&#x25BE;</span></div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
