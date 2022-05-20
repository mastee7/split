import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SplitVideo from "../../components/SplitVideo/SplitVideo";

import styles from "./Watch.module.css";

export default function Watch() {
  return (
    <div>
      <Navbar />
      <div className={styles.watch}>
        <div className={styles.left}>
          <div className={styles.video}>
            <SplitVideo />
          </div>
        </div>

        <div className={styles.recommendations}></div>
      </div>
    </div>
  );
}
