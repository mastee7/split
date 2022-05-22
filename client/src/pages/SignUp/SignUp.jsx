import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignUp.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) 
    {
      console.log("Passwords don't match");
      return;
    }

  };

  return (
    <div>
      <Navbar />
      <div className={styles.signUp}>
        <form className={styles.container} onSubmit={onSubmit}>
          <Logo style={styles.logo} />
          <label className={styles.label}>Username</label>
          <input
            id="sign-up-username"
            className={`${styles.component} ${styles.input}`}
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />

          <label className={styles.label}>Email</label>
          <input
            id="sign-up-email"
            className={`${styles.component} ${styles.input}`}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label className={styles.label}>Birthday</label>
          <input
            id="sign-up-birthday"
            className={`${styles.component} ${styles.input}`}
            type="date"
            placeholder="Birthday"
            onChange={(event) => setBirthday(event.target.value)}
            value={birthday}
          />

          <label className={styles.label}>Password</label>
          <input
            id="sign-up-password"
            className={`${styles.component} ${styles.input}`}
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <label className={styles.label}>Confirm Password</label>
          <input
            id="sign-up-confirm-password"
            className={`${styles.component} ${styles.input}`}
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />

          <button
            className={`${styles.component} ${styles.button}`}
          >
            Sign up
          </button>

          <div className={styles.subtext}>
            <div>Have an account?</div>

            <div className={styles.subtext__link}>
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
