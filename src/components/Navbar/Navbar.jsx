import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export default function Navbar() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.navbar}>
      {/* Left */}
      <div className={styles.navbar__section}>
        <MenuIcon className={styles.navbar__menu__icon} />
        <Logo />

        <Link
          className={`${styles.navbar__link} ${styles.navbar__margin}`}
          to="/about"
        >
          <MenuBookRoundedIcon className={styles.navbar__link__icon} />
          About
        </Link>
      </div>

      {/* Center */}
      <div className={styles.navbar__center}>
        <form className={styles.navbar__searchbar} onSubmit={handleSubmit}>
          <SearchIcon className={styles.navbar__searchbar__icon} />
          <input className={styles.navbar__searchbar__input} type="text" />
          <button className={styles.navbar__searchbar__button}>
            <SearchIcon />
          </button>
        </form>
      </div>

      {/* Right */}
      <div className={styles.navbar__section}>
        <Link
          className={`${styles.navbar__link} ${styles.navbar__login} ${styles.navbar__margin}`}
          to="/signin"
        >
          <AccountCircleOutlinedIcon className={styles.navbar__link__icon} />
          Sign in
        </Link>

        <SearchIcon className={styles.navbar__icon} />
        
        <Link to="/signin">
          <AccountCircleOutlinedIcon className={styles.navbar__icon} />
        </Link>
      </div>
    </div>
  );
}
