// HeroSection.js
import React from 'react';
import styles from './hero.module.css';
import display from '../../../public/assets/display2.jpg'

const HeroSection = () => {
  return (
    <section className={styles.heroSection} id='home'>
      <div className={styles.textContainer}>
        <h1 className={styles.mainHeading}>Hey there! I'm Beah Njoka</h1>
        <p className={styles.description}>
        A junior frontend developer on a mission to whip up <b>awesome websites for cool clients.</b> <br/><br/>
        From coding magic in HTML, CSS, and JavaScript to creating user-friendly vibes,<br/> I'm all about turning web dreams into reality. <br/><br/>
        Ready to bring some digital pizzazz to the party and make clients smile! 😎✨
        </p>
        <a
          href="https://wa.me/+254796168288"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          Whatsapp Me
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={display}
          alt="Your Display Picture"
          className={styles.displayPicture}
        />
      </div>
      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
      </section>
    
  );
};

export default HeroSection;
