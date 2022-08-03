import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await login({ email, password }, dispatch);
    
    if (res === null) setError("Incorrect email or password")
    else window.location.href = "/";
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
            disabled={isFetching}
          >
            Sign in
          </button>

          {/* Error message */}
          <text className={styles.errorMessage}>{error}</text>

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
