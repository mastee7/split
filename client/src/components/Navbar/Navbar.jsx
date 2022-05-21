import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

// Material UI Icons
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import Status from "../Status/Status";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  const [user, setUser] = useState("");

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
        <Searchbar/>
      </div>

      {/* Right */}
      <div className={styles.navbar__section}>
        <Status/>
      </div>
    </div>
  );
}
