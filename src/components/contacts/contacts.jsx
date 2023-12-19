// ContactUsSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the faLinkedin icon
import styles from './contacts.module.css';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const ContactUsSection = () => {
  return (
    <footer id="contact">
      <div className={styles.container}>
      <div className={styles.text}>
      <h2 >Contact Us</h2>
      <p>Feel free to reach out!</p>
      </div>
    
        <ul className={styles.links}>
          <li className={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
            <a href="mailto:beatechdynamics@gmail.com">  beatechdynamics@gmail.com</a>
          </li>  
        </ul>

        <ul className={styles.links}>
          <li className={styles.link}>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
            <a href="https://www.linkedin.com/in/beatrice-njoka/">  Linkedin</a>
          </li>  
        </ul>

        <ul className={styles.links}>
          <li className={styles.link}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
            <a href="https://github.com/beahnjoka">  Github</a>
          </li>  
        </ul>

        <ul className={styles.links}>
          <li className={styles.link}>
            <FontAwesomeIcon icon={faPhone} />
            <p>  +254796168288</p>
          </li>  
        </ul>

        </div>

        <div className={styles.final}>
          <p>Made with 
           <FontAwesomeIcon icon={faHeart} className={styles.faHeart} />
          by Dev Beahnjoka!
        </p>
        </div>
    </footer>
  );
};

export default ContactUsSection;
