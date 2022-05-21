import React from 'react'
import styles from "./SplitVideoModal.module.css"

export default function SplitVideoModal({children, topModalText, bottomModalText}) {
  return (
    <div className={styles.splitVideoModal}>
        <div className={styles.topModal}>{topModalText}</div>
        {children}
        <div className={styles.bottomModal}>{bottomModalText}</div>
    </div>
  )
}
