import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import styles from "./SplitVideoModal.module.css";

export default function SplitVideoModal({
  children,
  topModalText,
  bottomModalText,
  isVisible
}) {
  // Let user pick which modal they want?
  const [isCovering, setIsCovering] = useState(false);
  return (
    <div className={styles.splitVideoModal}>
      {/* {!isCovering && isVisible && <div className={styles.topModal}>{topModalText}Top</div>} */}

      {children}

      {/* {!isCovering && isVisible && <div className={styles.bottomModal}>{bottomModalText}Bottom</div>} */}

      <div className={styles.coverModal}>
        <h1>{topModalText}</h1>
        <p>{bottomModalText}</p>
      </div>
    </div>
  );
}
