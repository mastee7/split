import React from "react";
import styles from "./SplitVideoButton.module.css";

export default function SplitVideoButton({
  FirstIcon,
  SecondIcon,
  onClick,
  currentState
}) {
  return (
    <div className={styles.splitVideoButton} onClick={() => onClick()}>
      {currentState ? <FirstIcon className={styles.icon}/> : <SecondIcon className={styles.icon}/>}
    </div>
  );
}
