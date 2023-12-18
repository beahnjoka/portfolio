import React from 'react';
import styles from './experience.module.css';
import skill from '../../data/skills.json';
import history from '../../data/work.json';


const ExperienceSection = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}> experience</h2>
            <div className={styles.underline}></div>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skill.map(item =>
                    <div key={item.name} className={styles.skill}>
                        <div className={styles.skillimg}>
                        <img src= {item.image} alt={item.name} className={styles.image} />
                        </div>
                        <p>{item.name}</p>
                        </div>
                        )}
                    
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) =>{
                        return(
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role},${historyItem.organization}`}</h3>
                                    <div className={styles.underline}></div>
                                    <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experinces.map((experince, id) => {
                                            return <li key={id} >{experince}</li>
                                        }
                                        )}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
    );
}

export default ExperienceSection;