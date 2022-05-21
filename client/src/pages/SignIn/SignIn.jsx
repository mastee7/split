import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.css";

import { AccountContext } from "../../services/Account";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in", data);
      })
      .catch((err) => {
        console.log("Failed to login", err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className={styles.signIn}>
        <form className={styles.container} onSubmit={handleSubmit}>
          <Logo style={styles.logo} />

          {/* Email input */}
          <label className={styles.label}>Email</label>
          <input
            className={`${styles.component} ${styles.input}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Password input */}
          <label className={styles.label}>Password</label>
          <input
            className={`${styles.component} ${styles.input}`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className={`${styles.component} ${styles.button}`}
          >
            Sign in
          </button>

          <div className={styles.subtext}>
            <span className={styles.subtext__link}>
              Forgot password?
            </span>

            <Link to="/signup">
              <span className={styles.subtext__link}>Sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
