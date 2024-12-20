import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I am a professional graphic and UI/UX designer with 5 years of experience in the field. I specialize in creating visually compelling designs and intuitive user interfaces that deliver seamless user experiences. I am proficient in industry-standard design tools such as Adobe Creative Suite (Photoshop, Illustrator, XD), Figma, and Sketch, and I keep myself updated with the latest design trends and best practices.

My work strikes a balance between creativity and functionality, as I focus on understanding client requirements and user behavior to craft designs that are both aesthetically pleasing and effective. I have strong skills in wireframing, prototyping, and user testing, ensuring that the final product aligns with user needs and expectations.

I enjoy working collaboratively in team environments but am also comfortable managing projects independently. With strong communication and problem-solving skills, I can handle projects from conceptualization to final delivery, meeting tight deadlines without compromising quality.

My passion for design and dedication to continuous learning drive me to consistently produce high-quality work and contribute value to every project I take on.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
