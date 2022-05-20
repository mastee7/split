import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <Navbar />
      <div className={styles.signIn}>
        <form className={styles.signIn__container} onSubmit={handleSubmit}>
          <Logo style={styles.signIn__logo} />

          <input
            className={`${styles.signIn__component} ${styles.signIn__input}`}
            type="text"
            placeholder="Username"
          />
          <input
            className={`${styles.signIn__component} ${styles.signIn__input}`}
            type="password"
            placeholder="Password"
          />
          <button
            className={`${styles.signIn__component} ${styles.signIn__button}`}
          >
            Sign in
          </button>

          <div className={styles.signIn__subtext}>
            <span className={styles.signIn__subtext__link}>
              Forgot password?
            </span>

            <Link to="/signup">
              <span className={styles.signIn__subtext__link}>Sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
