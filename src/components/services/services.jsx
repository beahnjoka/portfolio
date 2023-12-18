// ServicesSection.js
import React from 'react';
import styles from './services.module.css'; 
import servicesData from '../../data/services.json'

const ServicesSection = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.services}>
        {servicesData.map(service => 
          <div key={service.id} className={styles.serviceCard}>

            <img src= {service.icon} 
            alt={service.title} 
            className={styles.serviceIcon} 
            />

            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
