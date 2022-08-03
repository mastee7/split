import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SplitVideo from "../../components/SplitVideo/SplitVideo";
import styles from "./About.module.css";
import axios from "axios";

// Can be improved in the future
// It should be easier to make when I have a greater grasp of what I'm making
export default function About() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("SUBMIT EMAIL");

    try {
      const res = await axios.post("http://localhost:5000/api/email/add", {
        email: email,
      });

      setIsSubmitted(true)
    } catch (err) {

    }
  };

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

        {isSubmitted ? (
          <div className={styles.about__thankList}>🎉 Thanks! 🎉</div>
        ) : (
          <form className={styles.about__mailingList} onSubmit={handleSubmit}>
            👋 Join our mailing list! 👋
            <input
              className={`${styles.about__mailingList__component} ${styles.about__mailingList__input}`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className={`${styles.about__mailingList__component} ${styles.about__mailingList__button}`}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
