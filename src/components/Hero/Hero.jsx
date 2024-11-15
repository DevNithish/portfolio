import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nithish Kumar <h6>aka</h6>Nikux</h1>
        <p className={styles.description}>
          I'm a full-stack developer and AI Enthusiast. Always curious and driven by a passion for technology, I have dedicated myself to exploring the depths of various technologies.  Reach out if you'd like to learn more!
        </p>
        <a href="mailto:nithish10vln@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="My Avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
