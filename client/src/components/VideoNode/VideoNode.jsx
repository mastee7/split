import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./VideoNode.module.css";

export default function VideoNode() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["hi",""]);

  const updateAnswers = (id, answer) => {
    setAnswers(answers.map((val, index) => index === id? answer : val));
  }
  return (
    <div className={styles.root}>
      <div className={`${styles.topBlock} ${styles.block}`}>
        {/* Close button */}
        <CloseOutlinedIcon className={styles.delete} />

        {/* Upload file */}
        <label className={styles.fileUpload}>
          <div>
            <VideocamOutlinedIcon />
          </div>
          <div>Upload video</div>
          <input className={styles.input} type="file" name="text" />
        </label>

        {/* Question */}
        <input onChange={(event) => setQuestion(event.target.value)}></input>

        {/* Answers */}
        {
        answers.map((currentValue, index)=>(
            <input onChange={(event) => updateAnswers(index, event.target.value)} value={answers[index]}></input>
        ))}
      </div>
    </div>
  );
}
