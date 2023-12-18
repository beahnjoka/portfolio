// Navbar.js

import React, { useState } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <div className={styles.menu}>
        <div className={styles.menubtn} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ?faTimes :faBars} />
        </div>
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          {/* Your menu items */}
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
