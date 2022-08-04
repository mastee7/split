import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./Status.module.css";

import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/apiCalls";

export default function Status() {
  const { user, dispatch } = useContext(AuthContext);
  console.log(window.location.href);
  const handleLogout = (event) => {
    console.log("LOGOUT");
    logout(dispatch);
  };

  if (user)
    return (
      <>
        <SearchIcon className={styles.icon} />
        <div className={styles.profileBar} tabIndex="0">
          <img
            className={styles.profilePic}
            src=""
            onError={(e) => {
              e.target.onError = null;
              e.target.src="https://i.ibb.co/37YHLK3/profile-pic.png"
            }}
          ></img>
          <div className={`${styles.link} ${styles.profileName}`}>
            {user.username}
          </div>

          {/* Dropdown menu */}
          <div className={styles.dropdownMenu}>
            {/* Profile, if user is already in the profile page, don't show it */}
            {window.location.href !== "http://localhost:3000/profile" && (
              <Link className={styles.dropdownMenu__item} to="/profile">
                <AccountCircleOutlinedIcon />
                <div className={styles.dropdownMenu__text}>View Profile</div>
              </Link>
            )}

            {/* Logout item */}
            <span className={styles.dropdownMenu__item} onClick={handleLogout}>
              <LogoutIcon />
              <div className={styles.dropdownMenu__text}>Sign out</div>
            </span>
          </div>
        </div>
      </>
    );
  else
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
