import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarIcon.module.css";

export default function SidebarIcon({ Icon, title, path }) {
  return (
    <Link to={path}>
      <div className={styles.sidebarIcon}>
        {Icon && <Icon />}
        {title}
      </div>
    </Link>
  );
}
