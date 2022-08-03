import styles from "./PasswordStrengthModal.module.css";
import DoneIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";

export default function PasswordStrengthModal({ passwordStrength }) {
  return (
    <div className={styles.label}>
      <div className={styles.label__item}>
        {passwordStrength[0]? <DoneIcon className={styles.label__itemIcon} /> : <CircleIcon className={styles.label__itemIcon}/>}
        <text>At least 8 characters</text>
      </div>
      <br />

      <div className={styles.label__item}>
        {passwordStrength[1]? <DoneIcon className={styles.label__itemIcon}/> : <CircleIcon className={styles.label__itemIcon}/>}
        <text>Lowercase and Uppercase</text>
      </div>
      <br />

      <div className={styles.label__item}>
        {passwordStrength[2]? <DoneIcon className={styles.label__itemIcon} /> : <CircleIcon className={styles.label__itemIcon}/>}
        <text>Number (0-9)</text>
      </div>
      <br />

      <div className={styles.label__item}>
        {passwordStrength[3]? <DoneIcon className={styles.label__itemIcon} /> : <CircleIcon className={styles.label__itemIcon}/>}
        <text>Special Character (!@#$%^&")</text>
      </div>
      <br />
    </div>
  );
}
