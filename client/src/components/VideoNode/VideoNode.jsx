import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./VideoNode.module.css";

export default function VideoNode({nodeId,}) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["hi", "", ""]);

  const updateAnswers = (id, answer) => {
    setAnswers(answers.map((val, index) => (index === id ? answer : val)));
  };
  return (
    <div className={styles.root}>
      <div className={`${styles.topBlock} ${styles.block}`}>
        {/* Close button */}
        <CloseOutlinedIcon className={styles.delete} />

        <Handle position={Position.Left} type="target" />
        {/* Upload file */}
        <label className={styles.fileUpload}>
          <div>
            <VideocamOutlinedIcon />
          </div>
          <div>Upload video</div>
          <input className={styles.input} type="file" name="text" />
        </label>

        <div className={styles.questionDiv}>
          <label>Question</label>
          <input
            className={styles.questionInput}
            onChange={(event) => setQuestion(event.target.value)}
          ></input>

          {/* Answers */}
          {/* This is hard coded because, I hate this project and I wanna move on to sth else */}
          <label>Answers</label>
          <input className={styles.questionInput}></input>
          <Handle
            id="a"
            style={{ top: 0 }}
            position={Position.Right}
          />

          <input className={styles.questionInput}></input>
          <Handle id="b" position={Position.Right} />

          <input className={styles.questionInput}></input>
          <Handle
            id="c"
            style={{ top: "100%" }}
            position={Position.Right}
          />
        </div>
      </div>
    </div>
  );
}
