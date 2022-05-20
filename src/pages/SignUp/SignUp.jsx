import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signUp}>
        <form className={styles.signUp__container} onSubmit={handleSubmit}>
          <Logo style={styles.signUp__logo} />

          <input
            className={`${styles.signUp__component} ${styles.signUp__input}`}
            type="text"
            placeholder="Username"
          />
          <input
            className={`${styles.signUp__component} ${styles.signUp__input}`}
            type="email"
            placeholder="Email"
          />
          <input
            className={`${styles.signUp__component} ${styles.signUp__input}`}
            type="password"
            placeholder="Password"
          />
          <input
            className={`${styles.signUp__component} ${styles.signUp__input}`}
            type="password"
            placeholder="Confirm Password"
          />

          <button
            className={`${styles.signUp__component} ${styles.signUp__button}`}
          >
            Sign up
          </button>

          <div className={styles.signUp__subtext}>
            <div>Have an account?</div>

            <div className={styles.signUp__subtext__link}>
              <Link to="/signin">Sign in</Link></div>
          </div>
        </form>
      </div>
    </div>
  );
}
