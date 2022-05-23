import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import styles from "./SplitVideoModal.module.css";

export default function SplitVideoModal({ children, isVisible, question }) {
  // Let user pick which modal they want?
  const [isCovering, setIsCovering] = useState(true);
  return (
    <div className={styles.splitVideoModal}>
      {/* {!isCovering && isVisible && <div className={styles.topModal}>{topModalText}Top</div>} */}
      {children}
      {/* {!isCovering && isVisible && <div className={styles.bottomModal}>{bottomModalText}Bottom</div>} */}

      {isCovering && isVisible && (
        <div className={styles.coverModal}>
          <h2>{question.question}</h2>
          {question.answers.map((e, index) => {
            return <p className={styles.modalOption}>{e}</p>;
          })}
        </div>
      )}
    </div>
  );
}
