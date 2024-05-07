// Menu.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './menu.module.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  const closeDropdown = () => {
    setMenuOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <div className={styles['menu-container']} ref={menuRef}>
      <div className={styles['menu-icon']} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`${styles['line']} ${menuOpen && styles['line-open']}`}></div>
        <div className={`${styles['line']} ${menuOpen && styles['line-open']}`}></div>
        <div className={`${styles['line']} ${menuOpen && styles['line-open']}`}></div>
      </div>

      {menuOpen && (
        <div className={styles['menu-width']}>
          <div className={styles['menu-items']}>
            <span className={styles.closeButton} onClick={closeDropdown}>X</span>
            <div className={styles['menu-grid']}>
              <div className={styles['menu-column']}>
              <span><div className={styles['menu-item']}>For Innovators and Founders &#x25BE;</div></span>  
                <span><div className={styles['menu-item']}>Investment in Companies &#x25BE;</div></span>
              </div>
              <div className={styles['menu-column']}>
               <span><div className={styles['menu-item']}>Investor Relation &#x25BE;</div></span> 
              <span><div className={styles['menu-item']}>Sustainability &#x25BE;</div></span>  
              </div>
              <div className={styles['menu-column']}>
                <div
                  className={`${styles['menu-item']} ${styles['industries-item']}`}
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  Industries
                  <span className={styles['arrow-icon']} dangerouslySetInnerHTML={{__html: '&#x25BE;'}}></span>
                </div>
                <div className={styles['menu-item']}>Invest With Us &#x25BE;</div>
              </div>
              <div className={styles['menu-column']}>
              <span> <div className={styles['menu-item']}>Our Team &#x25BE;</div></span> 
              <span><div className={styles['menu-item']}>Career &#x25BE;</div></span>  
             <span><div className={styles['menu-item']}>Contact Us &#x25BE;</div></span>   
              </div>
            </div>
            {industriesOpen && (
             <div className={styles['industries-dropdown']} style={{ gridColumn: 'span 2' }}>
                <div>Goods Care</div>
                <div>Education</div>
                <div>Construction</div>
                <div>Technology</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
