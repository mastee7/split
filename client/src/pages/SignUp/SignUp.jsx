import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SignUp.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";

import axios from "axios";
import PasswordStrengthModal from "../../components/PasswordStrengthModal/PasswordStrengthModal";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(
    new Array() < Boolean > 5
  );
  const [error, setError] = useState("");

  const changePasswordField = (event) => {
    setPassword(event.target.value);
    setPasswordStrength(checkPasswordStrength(event.target.value));
  };

  const checkPasswordStrength = (password) => {
    let passwordQualifications = [false, false, false, false, false];

    let hasLowercaseAndUppercase = new RegExp("(?=.*[a-z])(?=.*[A-Z])");
    let hasNumber = new RegExp("(?=.*[0-9])");
    let hasSpecialCharacter = new RegExp("(?=.*[^A-Za-z0-9])");
    let atLeastEight = new RegExp("(?=.{8,})");

    if (atLeastEight.test(password)) {
      passwordQualifications[0] = true;
    }
    if (hasLowercaseAndUppercase.test(password)) {
      passwordQualifications[1] = true;
    }
    if (hasNumber.test(password)) {
      passwordQualifications[2] = true;
    }
    if (hasSpecialCharacter.test(password)) {
      passwordQualifications[3] = true;
    }

    if (
      passwordQualifications[0] &&
      passwordQualifications[1] &&
      passwordQualifications[2] &&
      passwordQualifications[3]
    )
      passwordQualifications[4] = true;
    return passwordQualifications;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check for errors
    setError("");
    if (username === "") setError("Username is required");
    else if (email === "") setError("Email is required");
    else if (birthday === null) setError("Birthday is required");
    else if (password !== confirmPassword) setError("Passwords don't match");
    else {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username: username,
            email: email,
            birthday: birthday,
            password: password,
          }
        );

        window.location.href = "/signin";
      } catch (err) {
        setError(err.response.data);
      }
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
          ></input>

          <label className={styles.label}>Email</label>
          <input
            id="sign-up-email"
            className={`${styles.component} ${styles.input}`}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>

          <label className={styles.label}>Birthday</label>
          <input
            id="sign-up-birthday"
            className={`${styles.component} ${styles.input}`}
            type="date"
            placeholder="Birthday"
            onChange={(event) => setBirthday(event.target.value)}
            value={birthday}
          ></input>

          <label className={styles.label}>Password</label>
          <input
            id="sign-up-password"
            className={`${styles.component} ${styles.input}`}
            type="password"
            placeholder="Password"
            onChange={(event) => changePasswordField(event)}
            value={password}
          ></input>
          <PasswordStrengthModal passwordStrength={passwordStrength} />

          <label className={styles.label}>Confirm Password</label>
          <input
            id="sign-up-confirm-password"
            className={`${styles.component} ${styles.input}`}
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          ></input>

          <text className={styles.errorMessage}>{error}</text>
          <button className={`${styles.component} ${styles.button}`}>
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
