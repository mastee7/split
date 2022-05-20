import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SplitVideo from "../../components/SplitVideo/SplitVideo";
import styles from "./About.module.css";

// Can be improved in the future
// It should be easier to make when I have a greater grasp of what I'm making
export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.about__header}>
          <div className={styles.about__header__text}>
            Here is a demonstration of our ✨product✨
          </div>
          <div className={styles.about__header__video}>
            <SplitVideo />
          </div>
        </div>

        <div className={styles.about__mailingList}>
          👋 Join our mailing list! 👋
          <input
            className={`${styles.about__mailingList__component} ${styles.about__mailingList__input}`}
            type="email"
            placeholder="Email"
          />
          <button
            className={`${styles.about__mailingList__component} ${styles.about__mailingList__button}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
