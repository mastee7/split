import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "./../../services/Account";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Status.module.css";

export default function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <>
      <Link
        className={`${styles.link} ${styles.login} ${styles.margin}`}
        to="/signin"
      >
        <AccountCircleOutlinedIcon className={styles.link__icon} />
        Sign in
      </Link>

      <SearchIcon className={styles.icon} />

      <Link to="/signin">
        <AccountCircleOutlinedIcon className={styles.icon} />
      </Link>
    </>
  );
}
