import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/sch.png")}
          alt="Cartoon Avatar"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {
            <li className={styles.aboutItem}>
             <div className={styles.aboutItemText}>
               <h3>Hello there :)</h3>
               <p>
               &emsp;&emsp; I'm a passionate Computer Science and Engineering student with a keen intrest in AI, Machine learning, and Web development.
             
               
                My journey in technology is driven by curiosity and a love for learning, constantly exploring new avenues to expand my skill set.
                </p>
             </div>
           </li>
         
          }
        </ul>
      </div>
    </section>
  );
};
