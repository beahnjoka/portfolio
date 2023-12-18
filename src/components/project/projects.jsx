// ProjectsSection.js
import React from 'react';
import styles from './projects.module.css';
import projects from "../../data/projects.json";

const ProjectsSection = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        
            {projects.map((item, index) => (
              <div key={index} className={styles.skillimg}>
                <div className={styles.profilecard}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <h3 className={styles.projectTitle}>{item.title}</h3>
                <p className={styles.projectDescription}>{item.description}</p>
                <ul className={styles.skills}>
                  {item.skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className={styles.link}>
                  <a href={item.demo} className={styles.links}>
                    Demo
                  </a>
                  <a href={item.source} className={styles.links}>
                    Source
                  </a>
                </div>
              </div>
              </div>
            ))}
          </div>
       
     
    </section>
  );
};

export default ProjectsSection;
