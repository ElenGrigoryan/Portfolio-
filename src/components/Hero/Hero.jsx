import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Elen</h1>
        <p className={styles.description}>
        I am a Graphic and UI/UX Designer with a passion for
branding design, illustrations, and creating user-friendly
digital experiences. I am friendly, helpful, polite, and
always eager to learn new skills. My focus is on delivering
creative designs that are both functional and visually
appealing, making brands stand out and users happy.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sunflower.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
