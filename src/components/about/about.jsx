// AboutSection.js

import React from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGlobe, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import display from '../../../public/assets/display2.jpg'

const AboutSection = () => {
  return (
    <div className={styles.aboutSection} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.underline}></div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          {/* Replace 'yourImage.jpg' with your actual image file */}
          <img 
          src={display} 
          alt="About Me" 
          className={styles.aboutpic}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.subtitle}>
            <FontAwesomeIcon icon={faUser} />
            <div>
              <h3>Who I Am</h3>
              <p>Frontend developer crafting digital experiences.</p>
            </div>
          </div>
          <div className={styles.subtitle}>
            <FontAwesomeIcon icon={faGlobe} />
            <div>
              <h3>My Passion</h3>
              <p>Passionate about coding, design, and all things tech. Turning ideas into digital magic!</p>
            </div>
          </div>
          <div className={styles.subtitle}>
            <FontAwesomeIcon icon={faCode} />
            <div>
              <h3>Tech Enthusiast</h3>
              <p>Tech enthusiast exploring the endless possibilities of the digital world. Always curious, always learning.</p>
            </div>
          </div>
          <div className={styles.subtitle}>
            <FontAwesomeIcon icon={faCogs} />
            <div>
              <h3>Skills</h3>
              <p>Versatile frontend skills: HTML, CSS, JavaScript and some of their frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
