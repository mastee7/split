import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo({ style }) {
  return (
    <span className={`${styles.logo} ${style} `}>
      <Link className={styles.logo}to="/">split /</Link>
    </span>
  );
}
